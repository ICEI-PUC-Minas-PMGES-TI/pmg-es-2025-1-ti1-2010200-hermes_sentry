import { BlocosCarnaval, Usuarios } from "../../services/blocos-services.js";
const blocosService = new BlocosCarnaval();
const usuariosService = new Usuarios();

document.addEventListener('DOMContentLoaded', function () {
  // Elementos do formulário
  const form = document.getElementById('form-usuario');
  const nomeCompletoInput = document.getElementById('nome_completo');
  const loginInput = document.getElementById('login');
  const dataNascInput = document.getElementById('data_nasc');
  const emailInput = document.getElementById('email');
  const senhaInput = document.getElementById('senha');
  const togglePasswordBtn = document.getElementById('toggle-password');
  const btnSalvar = form.querySelector('.btn-salvar');
  const btnExcluir = document.getElementById('btn-excluir');
  const notificacao = document.getElementById('notificacao');

  // Verificar tipo de usuário no sessionStorage
  const usuarioCorrente = JSON.parse(sessionStorage.getItem('usuarioCorrente'));
  const isOrganizador = usuarioCorrente && usuarioCorrente.tipo === 'organizador';

  // Configurar máscaras (usando Bootstrap)
  if (isOrganizador) {
    // Configurar máscara de CNPJ para organizadores
    $(loginInput).inputmask('99.999.999/9999-99');
  } else {
    // Configurar máscara de data para foliões
    $(dataNascInput).inputmask('9999-99-99');
  }

  // Configurar máscara de senha (mostrar/esconder)
  togglePasswordBtn.addEventListener('click', function () {
    const isPassword = senhaInput.type === 'password';
    senhaInput.type = isPassword ? 'text' : 'password';
    document.getElementById('eye-icon').style.display = isPassword ? 'none' : 'block';
    document.getElementById('eye-off-icon').style.display = isPassword ? 'block' : 'none';
  });

  // Carregar dados do usuário
  async function carregarDadosUsuario() {
    try {
      if (isOrganizador) {
        const blocos = await blocosService.getBlocos();
        const bloco = blocos.find(b => b.organizador.some(org => org.email_org === usuarioCorrente.email));

        if (bloco) {
          const organizador = bloco.organizador[0];
          document.getElementById('id').value = bloco.id;
          nomeCompletoInput.value = organizador.nome_org;
          loginInput.value = organizador.cnpj;
          emailInput.value = organizador.email_org;
          senhaInput.value = organizador.senha;
          dataNascInput.parentElement.style.display = 'none';
        }
      } else {
        const usuarios = await usuariosService.getUsuarios();
        const usuario = usuarios.find(u => u.email === usuarioCorrente.email);

        if (usuario) {
          document.getElementById('id').value = usuario.id;
          nomeCompletoInput.value = usuario.nome_completo;
          loginInput.value = usuario.login;
          dataNascInput.value = usuario.data_nasc;
          emailInput.value = usuario.email;
          senhaInput.value = usuario.senha;
        }
      }

    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      alert('Erro ao carregar dados do usuário. Tente novamente.');
    }
  }

  // Salvar dados do usuário
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Validar campos
    if (!nomeCompletoInput.value || !loginInput.value || !emailInput.value || !senhaInput.value) {
      alert('Preencha todos os campos');
      return;
    }

    if (!isOrganizador && !dataNascInput.value) {
      alert('Preencha a data de nascimento');
      return;
    }

    try {
      const id = document.getElementById('id').value;
      let response;

      if (isOrganizador) {
        const bloco = await blocosService.getBloco(id);
        bloco.organizador[0] = {
          nome_org: nomeCompletoInput.value,
          email_org: emailInput.value,
          cnpj: loginInput.value,
          senha: senhaInput.value
        };
        response = await blocosService.atualizarBloco(id, bloco);
      } else {
        const usuario = {
          id: parseInt(id),
          nome_completo: nomeCompletoInput.value,
          login: loginInput.value,
          data_nasc: dataNascInput.value,
          email: emailInput.value,
          senha: senhaInput.value
        };
        response = await usuariosService.atualizarUsuario(id, usuario);
      }

      if (response && response.id) {
        mostrarNotificacao();
        // Atualizar sessionStorage se o email foi alterado
        if (usuarioCorrente.email !== emailInput.value) {
          usuarioCorrente.email = emailInput.value;
          sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));
        }
      } else {
        throw new Error('Erro ao atualizar dados');
      }
    } catch (error) {
      console.error('Erro ao salvar:', error);
      alert('Erro ao salvar dados. Tente novamente.');
    }
  });

  // Função para mostrar notificação
  function mostrarNotificacao() {
    notificacao.classList.add('visivel');
    setTimeout(() => {
      notificacao.classList.remove('visivel');
    }, 3000);
  }

  // Botão de excluir conta
  btnExcluir.addEventListener('click', async function (e) {
    e.preventDefault();

    if (confirm('Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.')) {
      try {
        const id = document.getElementById('id').value;
        let response;

        if (isOrganizador) {
          response = await blocosService.excluirBloco(id);
        } else {
          response = await usuariosService.excluirUsuario(id);
        }

        if (response) {
          sessionStorage.removeItem('usuarioCorrente');
          window.location.href = 'login.html';
        } else {
          throw new Error('Erro ao excluir conta');
        }
      } catch (error) {
        console.error('Erro ao excluir:', error);
        alert('Erro ao excluir conta. Tente novamente.');
      }
    }
  });

  // Inicializar a página
  carregarDadosUsuario();
});