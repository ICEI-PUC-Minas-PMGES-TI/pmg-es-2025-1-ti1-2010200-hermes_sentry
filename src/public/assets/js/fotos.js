import { BlocosCarnaval } from "../../services/blocos-services.js";
const blocoService = new BlocosCarnaval();

const previewImage = document.getElementById('preview-image');
const pictureInput = document.getElementById('picture__input');
const uploadBtn = document.getElementById('upload-btn');

const captionInput = document.getElementById('caption-input');
const textUploadBtn = document.getElementById('text-upload-btn');

const gallery = document.getElementById('gallery');
const captionGallery = document.getElementById('caption-gallery');

// Dados locais
let imagens = [];
let legenda = '';

const usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
let usuarioCorrente = null;
if (usuarioCorrenteJSON) {
  try {
    usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
  } catch (e) {
    console.warn("Erro ao fazer parse do usuarioCorrente:", e);
  }
}
const usuarioLogado = {
  id: usuarioCorrente?.id ?? null,
  email: usuarioCorrente?.email ?? '',
  tipo: usuarioCorrente?.tipo ?? ''
};

let blocoId = null;
if(usuarioLogado.tipo == 'organizador'){
   blocoId = usuarioLogado.id;
} else{
  window.location = "http://localhost:3000/paginas/pesquisablocos.html"
}



document.addEventListener('DOMContentLoaded', () => {
  // Obter o ID do bloco da URL ou de algum outro lugar
  // Exemplo: const urlParams = new URLSearchParams(window.location.search);
  // blocoId = urlParams.get('blocoId');

  previewImage.style.display = 'none';

  pictureInput.addEventListener('change', () => {
    const file = pictureInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        previewImage.src = e.target.result;
        previewImage.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  });

  uploadBtn.addEventListener('click', async () => {
    const file = pictureInput.files[0];
    if (!file) {
      alert('Escolha uma imagem antes de enviar.');
      return;
    }

    const reader = new FileReader();
    reader.onload = async e => {
      const src = e.target.result;
      try {
        // Enviar para o JSON Server
        await enviarImagemParaServidor(src);
        adicionarImagem(src);
        pictureInput.value = '';
        previewImage.style.display = 'none';
      } catch (error) {
        console.error('Erro ao enviar imagem:', error);
        alert('Erro ao enviar imagem. Tente novamente.');
      }
    };
    reader.readAsDataURL(file);
  });

  textUploadBtn.addEventListener('click', async () => {
    const novaLegenda = captionInput.value.trim();
    if (!novaLegenda) {
      alert('Digite uma legenda antes de enviar.');
      return;
    }

    if (legenda) {
      alert('Legenda já enviada e não pode ser alterada.');
      return;
    }

    legenda = novaLegenda;
    atualizarGaleria(imagens, legenda);

    
    await enviarLegendaParaServidor(legenda);

    captionInput.disabled = true;
    textUploadBtn.disabled = true;
    captionInput.value = '';
  });
});

async function enviarImagemParaServidor(src) {
  if (!blocoId) {
    throw new Error('ID do bloco não definido');
  }

  // Obter o bloco atual
  const bloco = await blocoService.getBloco(blocoId);

  // Criar novo ID para a imagem
  const novoId = bloco.postagem[0].imagens.length > 0
    ? Math.max(...bloco.postagem[0].imagens.map(i => i.id)) + 1
    : 1;

  const novaImagem = {
    id: novoId,
    src: src // Ou você pode armazenar apenas o nome do arquivo
  };

  // Adicionar a nova imagem ao array de imagens do bloco
  bloco.postagem[0].imagens.push(novaImagem);

  // Atualizar o bloco no servidor
  const updateResponse = await blocoService.atualizarBloco(blocoId,bloco);

  if (!updateResponse.id) {
    throw new Error('Falha ao atualizar bloco');
  }
}

async function enviarLegendaParaServidor(texto) {
  if (!blocoId) {
    throw new Error('ID do bloco não definido');
  }

  // Obter o bloco atual
  const bloco = await blocoService.getBloco(blocoId);

  // Atualizar a legenda
  bloco.postagem[0].descricao_card = texto;

  // Atualizar o bloco no servidor
  const updateResponse = await blocoService.atualizarBloco(blocoId,bloco)

  if (!updateResponse.ok) {
    throw new Error('Falha ao atualizar bloco');
  }
}

function adicionarImagem(src) {
  const novoId = imagens.length > 0
    ? Math.max(...imagens.map(i => i.id)) + 1
    : 1;

  imagens.push({ id: novoId, src });
  atualizarGaleria(imagens, legenda);
}

function criarCardImagem(src) {
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Imagem enviada';

  card.appendChild(img);
  gallery.appendChild(card);
}

function criarCardLegenda(texto) {
  const card = document.createElement('div');
  card.className = 'caption-card';
  card.textContent = texto;

  captionGallery.appendChild(card);
}

function atualizarGaleria(imagens, legenda) {
  gallery.innerHTML = '';
  captionGallery.innerHTML = '';

  imagens.forEach(img => criarCardImagem(img.src));

  if (legenda.trim() !== '') {
    criarCardLegenda(legenda);
  }
}