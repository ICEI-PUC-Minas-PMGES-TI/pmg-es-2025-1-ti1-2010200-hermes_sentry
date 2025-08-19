import { BlocosCarnaval } from "../../services/blocos-services.js";
const blocoService = new BlocosCarnaval();

$(document).ready(function () {
    sessionStorage.removeItem('selectedBlocoId');
    let blocosCarregados = 0;
    const blocosPagina = 6;
    let blocos = [];
    let todosOsBlocos = [];
    (async () => {
        try {
            todosOsBlocos = await blocoService.getBlocos();
            blocos = [...todosOsBlocos];
            carregarMaisBlocos();
        } catch (error) {
            console.error("Erro ao buscar blocos:", error);
            alert("Erro ao carregar os dados do servidor.");
        }
    })();
    $('#btn-ver-mais').click(function () {
        carregarMaisBlocos();
    });

    $('input[type="checkbox"]').on('change', aplicarFiltros);

    function carregarMaisBlocos() {
        const proximoLote = blocos.slice(blocosCarregados, blocosCarregados + blocosPagina);
        proximoLote.forEach(function (bloco) {
            const card = criarCard(bloco);
            $('#container-cards').append(card.hide().fadeIn(500));
        });

        blocosCarregados += blocosPagina;

        if (blocosCarregados >= blocos.length) {
            $('#btn-ver-mais').hide();
        }
    }

    function aplicarFiltros() {
        const datasSelecionadas = $('input[name="dia"]:checked').map(function () {
            return $(this).val();
        }).get();

        const estilosSelecionados = $('input[name="estilo"]:checked').map(function () {
            return $(this).val();
        }).get();

        const publicosSelecionados = $('input[name="publico"]:checked').map(function () {
            return $(this).val();
        }).get();

        const faixasSelecionadas = $('input[name="faixa"]:checked').map(function () {
            return $(this).val();
        }).get();

        const melhoresSelecionados = $('input[name="avaliacao"]:checked').val() === "melhores";

        const nenhumFiltroAtivo =
            datasSelecionadas.length === 0 &&
            estilosSelecionados.length === 0 &&
            publicosSelecionados.length === 0 &&
            faixasSelecionadas.length === 0 &&
            !melhoresSelecionados;

        if (nenhumFiltroAtivo) {
            $('#container-cards').empty();
            blocosCarregados = 0;
            carregarMaisBlocos();
            $('#mensagem-nenhum').hide();
            $('#btn-ver-mais').show();
            return;
        }

        const blocosFiltrados = blocos.filter(function (bloco) {
            const datasOk = datasSelecionadas.length === 0 ||
                datasSelecionadas.includes(bloco.data);

            const estilosOk = estilosSelecionados.length === 0 ||
                estilosSelecionados.some(estilo => bloco.estilo_musical.includes(estilo));

            const publicosOk = publicosSelecionados.length === 0 ||
                publicosSelecionados.some(intervalo => {
                    const [min, max] = intervalo.split('-').map(Number);
                    return bloco.publico >= min && bloco.publico <= max;
                })

            const faixaOk = faixasSelecionadas.length === 0 ||
                faixasSelecionadas.includes(bloco.faixa_etaria);

            return datasOk && estilosOk && publicosOk && faixaOk;
        })

        if (melhoresSelecionados) {
            blocosFiltrados.sort((a, b) => b.avaliacao - a.avaliacao);
        }

        $('#container-cards').empty();

        if (blocosFiltrados.length === 0) {
            $('#mensagem-nenhum').show();
        } else {
            $('#mensagem-nenhum').hide();
            blocosFiltrados.forEach(bloco => {
                const card = criarCard(bloco);
                $('#container-cards').append(card.hide().fadeIn(300));
            });
        }

        $('#btn-ver-mais').hide();
    }

    $('#brpesquisa').on('input', function () {
        const palavraBusca = $(this).val().toLowerCase().trim();

        if (palavraBusca === "") {
            $('#container-cards').empty();
            $('#mensagem-nenhum').hide();
            blocos = [...todosOsBlocos];
            blocosCarregados = 0;
            carregarMaisBlocos();
            $('#btn-ver-mais').show();
            return;
        }

        const blocosFiltrados = blocos.filter(bloco =>
            bloco.nome_bloco.toLowerCase().includes(palavraBusca)
        );

        $('#container-cards').empty();

        if (blocosFiltrados.length === 0) {
            $('#mensagem-nenhum').show();
        } else {
            $('#mensagem-nenhum').hide();
            blocosFiltrados.forEach(bloco => {
                const card = criarCard(bloco);
                $('#container-cards').append(card.hide().fadeIn(300));
            });
        }

        $('#btn-ver-mais').hide();
    })
})

function criarCard(cardbloco) {
    const postagem = cardbloco.postagem[0];
    const imagemSrc = postagem.imagens[0].src;

    let div = $('<div>').addClass('card-blocos');

    let conteudo = $('<div>').addClass('card-conteudo');
    let img = $('<img>').attr('src', imagemSrc).attr('alt', 'Descrição');
    let h3 = $('<h3>').text(cardbloco.nome_bloco);
    let p = $('<p>').text(postagem.descricao_card);
    let i = $('<i>').html(`<i class="fa-solid fa-star"></i> ${cardbloco.avaliacao}`);

    conteudo.append(img, h3, i, p);

    let link = $('<a>').attr('href', 'paginablocos.html').attr('id', 'linkBloco').click(function () {
        sessionStorage.setItem('selectedBlocoId', cardbloco.id.toString());
        window.location.href = 'paginablocos.html';
    });
    let button = $('<button>').text('Ver mais');
    link.append(button);

    div.append(conteudo, link);
    return div;
}

