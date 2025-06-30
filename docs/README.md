# Introdução

Informações básicas do projeto.

* **Projeto:** Carnalivre
* **Repositório GitHub:** https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti1-2010200-hermes_sentry.git
* **Membros da equipe:**

1. [Davi Martins de Almeida ](https://github.com/davimartins27)
2. [Henrique Pereira Resende Rocha](https://github.com/Rickyzadas)
3. [João Prado Campos](https://github.com/Joao-Prado0)
4. [Lucas Gabriel de Oliveira Franco](https://github.com/lucasfrgabriel)
5. [Luiz Fernando Cunha Maia](https://github.com/Luizfmaia10-dev)
6. [Pedro Henrique Nogueira Ferreira](https://github.com/PedroHNFerreira)

A documentação do projeto é estruturada da seguinte forma:

1. Introdução
2. Contexto
3. Product Discovery
4. Product Design
5. Metodologia
6. Solução
7. Referências Bibliográficas

✅ [Documentação de Design Thinking (MIRO)](files/processo-dt.pdf)

# Contexto

O carnaval é um dos símbolos do nosso país, são cinco dias em que o povo brasileiro se extravaza e faz uma das festas mais bonitas e democráticas do mundo. Marcado pelos blocos de carnaval, música boa e clima quente, a festa atrai milhões de brasileiros para as ruas, além de se tornar uma atração para turistas que pretendem conhecer mais da cultura brasileira. Porém, com o enorme número de pessoas que participam da festa, se torna muito difícil para gestão pública gerenciar a folia, e é nessa dificuldade que nasce a maioria dos problemas relacionados ao feriado.

## Problema

Falando de forma mais local (atenderemos o carnaval da nossa cidade), a cidade de Belo Horizonte tem sido palco de um enorme crescimento na festa de rua com dados da prefeitura de Belo Horizonte mostrando um aumento de 220% no número de blocos cadastrados na prefeitura nos últimos 10 anos. Com esse aumento exponecial da festa, problemas habituais do carnaval como assédio, furtos, roubos, brigas, etc. se tornam mais proeminentes no contexto atual, por uma falta de capacidade do governo de gerir essa nova realidade da cidade. Além de problemas envolvendo a lei, o enorme aumento no fluxo de pessoas, tanto locais quanto turistas, acarreta na super lotação de alguns blocos o que desagrada pessoas que curtiam a festa antigamente. Por fim, esse aumento também torna a busca por blocos que agradam mais confusa, principalmente pela falta de uma plataforma moderna que centralize as informações dos blocos.

## Objetivos

A finalidade do CarnaLivre é desenvolver uma aplicação web que busca ajudar a remediar os problemas no carnaval de Belo Horizonte. Nesse contexto criamos uma plataforma que centraliza todas as informações dos blocos, cadastradas pelos seus próprios organizadores, e apresentaremos elas com imagens, descrição, informações importantes e geolocalização, para facilitar os usuários a escolherem os blocos que mais os agrada. Além disso teremos avaliações de cada bloco para mostrar a opinião pública e ajudar os organizadores a melhorar seus eventos. Além disso, criamos uma aba para denúncia de crimes presenciados pelos cidadões e exibiremos essas informações em um mapa, para assim tentar mostrar aos usuários áreas da cidade que necessessitam mais cautela para aproveitar a festa. 

## Justificativa

A escolha do tema segurança no carnaval surgiu devido todos os participantes do grupo conhecerem alguém que já passou por experiencias ruins no carnaval. O carnaval de Belo Horizonte cada vez mais vem crescendo, recebendo uma grande quantidade de pessoas de várias cidades vizinhas, mas junto a esse grande número de foliões, também temos problemas como furtos, assédios, brigas e muita desinformação. Muita gente não sabe onde estão os blocos, quais são mais tranquilos ou como pedir ajuda em caso de problemas. Pensando nisso, pensamos em um sistema simples e acessível que reúne informações dos blocos, permite comentários dos foliões, e ainda oferece uma aba para denúncias, ajudando a criar um carnaval mais seguro, participativo e consciente para todo mundo.

## Público-Alvo

O CarnaLivre é voltado principalmente para dois públicos: os foliões, que nesse caso são todos os cidadões que aproveitam a festa mais democrática do mundo, sendo assim um público alvo bem abrangente englobando as mais diversas etnias, classes sociais, faixas etárias, etc., esses usuários utilizaram nossa aplicação visando justamente a facilidade no acesso a informações do carnaval; e os organizadores de blocos, que precisam de uma plataforma prática para divulgar seus eventos, atrair mais público e colaborar com a organização e segurança da festa. Ambos se beneficiam da proposta do sistema, já que ele promove uma comunicação mais clara, fortalece a confiança entre participantes e ajuda a tornar o carnaval mais seguro e bem estruturado para todos.

# Product Discovery

## Etapa de Entendimento

* **Matriz CSD**: ![image](https://github.com/user-attachments/assets/4bf94b56-3c18-4a16-a158-27151bca36a9)
* **Mapa de stakeholders**: ![image](https://github.com/user-attachments/assets/6c6e216a-08ed-40f0-ad9d-577b5977674c)
* **Entrevistas qualitativas**: ![Entendimento - Empatia 2](https://github.com/user-attachments/assets/2d661889-0d63-4fbb-8d73-370dc443b54d)
![Entendimento - Empatia 3](https://github.com/user-attachments/assets/7127e2ff-7eb7-4060-a6cc-665d6db38b94)
* **Highlights de pesquisa**: ![Entendimento - Empatia 4](https://github.com/user-attachments/assets/e6d957b1-2656-41b8-a807-7084f5e28abb)


## Etapa de Definição

### Personas

| Persona 1 | Persona 2 |
| ------- | ------- |
| ![Persona1](https://github.com/user-attachments/assets/608eb868-6b0b-4805-951a-859e422dfe1c) | ![Persona2](https://github.com/user-attachments/assets/0acf91b6-3b52-4b7e-848f-bcedc5c1e41d) |

| Persona 3 | Persona 4 |
| --------- | --------- |
| ![Persona3](https://github.com/user-attachments/assets/89c63d6c-fb77-4865-b414-d6265b5aed04) | ![Persona4](https://github.com/user-attachments/assets/518aa30d-f215-48a9-8383-62bc0e84bded) |

| Persona 5 | Persona 6 |
| --------- | --------- |
| ![Persona5](https://github.com/user-attachments/assets/713ba46f-a926-47dc-b601-a6eae51b5c85) | ![Persona6](https://github.com/user-attachments/assets/92ade2f5-c3c8-4f1e-a17f-f4f8768f3d78) |

# Product Design

Nesse momento, vamos transformar os insights e validações obtidos em soluções tangíveis e utilizáveis. Essa fase envolve a definição de uma proposta de valor, detalhando a prioridade de cada ideia e a consequente criação de wireframes, mockups e protótipos de alta fidelidade, que detalham a interface e a experiência do usuário.

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

| EU COMO...`PERSONA` | QUERO/PRECISO ...`FUNCIONALIDADE`        | PARA ...`MOTIVO/VALOR`               |
| --------------------- | ------------------------------------------ | -------------------------------------- |
| Usuário: Folião   | Preciso do sistema de denuncias do site | Me sentir mais amparada e protegida em caso de qualquer problemas |
| Usuário: Folião   | Um mapa interativo (API Google Maps) | Não me perder pela cidade enquanto procuro os blocos |
| Usuário: Folião   | Um sistema de pesquisa de blocos | Encontrar informações sobre blocos |
| Usuário: Folião   | Filtros de pesquisa | Para selecionar blocos que atendem aos meus interesses e gostos |
| Usuário: Folião   | Ver o feedback dos blocos  | Para saber qual é o mais animado |
| Usuário: Representante de bloco   | Cadastro dos blocos | Divulgar informações sobre o bloco que organiza, e aumentar seu alcance |
| Usuário: Folião   | Categoria e Feedback dos blocos | Para conseguir curtir em segurança com a minha família |
| Usuário: Folião   | Preciso saber quais lugares/ruas estarao fechados e abertos durante o carnaval | Me organizar durante o periodo da folia|
| Usuário: Folião   | Criar grupos de usuários com meus amigos | Conseguirmos nos encontrar com maior facilidade nos blocos |

## Proposta de Valor

| 1: Vitoria | 2: Juliana |
| ----- | ------ |
| ![Proposta1](https://github.com/user-attachments/assets/0e1cee70-13ff-4e2f-b2da-3a54c4142478) | ![Proposta2](https://github.com/user-attachments/assets/82bc1070-53f0-4aff-b255-16e1f9d8b38e) |

| 3: Guilherme | 4: Marcelo |
| ----- | ------ |
| ![Proposta3](https://github.com/user-attachments/assets/3e65bca7-9c17-42fa-a5bf-705a4e5a0d1c) | ![Proposta4](https://github.com/user-attachments/assets/8ae59a5d-7187-4739-a337-0e24c492c852) |

| 5: Maria Jeronima | 6: Pedro |
| ----- | ------ |
| ![Proposta5](https://github.com/user-attachments/assets/175589d5-0a7d-463a-bee3-75182abdac15) | ![Proposta6](https://github.com/user-attachments/assets/3a58f43a-0980-42ff-ba4c-ff1e6e7d6a58) |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais


| ID     | Descrição do Requisito                                   | Prioridade |
| ------ | ---------------------------------------------------------- | ---------- |
| RF-001 | O sistema deve ter integração com a API do Google Maps, assim proporcionando mapas interativos e informativos. | ALTA |
| RF-003 | O sistema deve permitir que organizadores cadastrem blocos, informando nome, localização, público esperado, faixa etária média, estilo musical e anexando imagens. | MÉDIA |
| RF-002 | O sistema deve armazenar as infromações cadastradas pelos organizadores do bloco e organizar elas nos mapas. | ALTA |
| RF-004 | O site deve conter cadastro diferente para organizadores de bloco, deve exigir email, senha, CNPJ da organização (para verificação),captcha. | MÉDIA |
| RF-005 | O sistema deve conter cadastramento dos demais usuários, solicitando email, nome completo, senha e nome de usuário. | ALTA |
| RF-006 | O sistema deve conter espaço para login daqueles que já possuem conta (Email e senha). | BAIXA |
| RF-007 | O sistema deve permitir que usuários avaliem os blocos com notas de uma a cinco estrelas, façam comentários sobre os blocos e compartilhem as páginas de eventos. | MÉDIA |
| RF-008 | O sistema deve permitir que usuários registrem denúncias informando local, crime ocorrido, horário e bloco associado. | ALTA |
| RF-009 | O sistema deve permitir que usuários pesquisem os blocos por nome. A pesquisa deve também incluir filtros de pesquisa, sendo eles: tamanho do bloco, região, horário, estilo musical, faixa etária, avaliação e se acontece no dia da pesquisa. | MÉDIA |
| RF-010 | O sistema deve ser capaz de validar o CNPJ informado no cadastro dos organizadores, verificando se é válido segundo as regras da Receita Federal. | BAIXA |

### Requisitos não Funcionais
| ID      | Descrição do Requisito                                                             | Prioridade |
| ------- | ---------------------------------------------------------------------------------- | ---------- |
| RNF-001 | Desenvolvimento em HTML, CSS e JavaScript.(código organizado e eficiente). | MÉDIA |
| RNF-002 | Páginas devem abrir em menos de 5 segundos. | BAIXA |
| RNF-003 | Alta usabilidade, tendo em vista o diverso público alvo que o sistema vai atender. | BAIXA |
| RNF-004 | O site deve ser responsivo para as diferentes telas. | BAIXA |
| RNF-005 | O sistema deve garantir 99,5% de uptime mensal, monitorado por ferramentas de observabilidade. | ALTA |

## Projeto de Interface

Artefatos relacionados com a interface e a interacão do usuário na proposta de solução.

### Wireframes

Estes são os protótipos de telas do sistema.

| Login | Login Bloco |
| ----- | ------ |
| ![Tela-Login](https://github.com/user-attachments/assets/8aa11ebf-b199-401d-a9de-3542abedea91) | ![Login Bloco](https://github.com/user-attachments/assets/8066a682-6276-4da2-8871-8918b6829c0e) |

| Cadastro Usuario | Cadastro Bloco |
| ----- | ------ |
| ![Cadastro](https://github.com/user-attachments/assets/270c238f-d574-4a9d-8451-98a1990018c3) | ![Cadastro-Bloco](https://github.com/user-attachments/assets/60f91d99-9e83-4c27-a8c5-9e6d391e564e) |

| Home | Blocos |
| ----- | ------ |
| ![Home](https://github.com/user-attachments/assets/a1b41eaa-57f5-4b94-a14c-63c888d57b51) | ![Blocos](https://github.com/user-attachments/assets/a567e4de-da93-4d65-9c95-fe2d399c6f51) |

| Descrição dos blocos | Perfil |
| ----- | ------ |
| ![Descricao-Blocos](https://github.com/user-attachments/assets/2cb67940-55da-4164-ace2-36803c617bc5) | ![Profile](https://github.com/user-attachments/assets/8a33e2b0-2d36-4710-a2a4-05e4461bd3a9) |

| Selecionar | Home Bloco |
| ----- | ------ |
| ![Selecionar](https://github.com/user-attachments/assets/573d1ed3-9860-4a49-8baf-b041d7f3a87c) | ![Home-Bloco](https://github.com/user-attachments/assets/e2f50e16-690d-4764-84c1-0edbf909bf4f) |

| Denuncia | Perfil Bloco |
| ----- | ------ |
| ![Denuncia](https://github.com/user-attachments/assets/d50aa16f-dbb7-459c-a433-3af261d49d0f) | ![Profile-Bloco](https://github.com/user-attachments/assets/58d67806-554b-4474-972e-c043a9317559) |


### Protótipos de Tela

#### HOME-PAGE

Tela inicial do sistema

![HomePage](https://github.com/user-attachments/assets/4ce37207-2919-45c7-865f-d776f55334c3)

##### TELA DE LOGIN

Tela para login e/ou cadastro de usuário.

![Login](https://github.com/user-attachments/assets/2d343e95-4f73-4aac-9310-66feef439411)

##### TELA DE CADASTRO: Seleção

Tela para realizar cadastro, solicita ao usuário que informe o tipo de cadastro: bloco ou folião.

![CadSelecao](https://github.com/user-attachments/assets/d9560e76-aec0-4b06-b256-221994a0813c)

##### TELA DE CADASTRO: Cadastro

Tela para realizar cadastro de folião ou bloco, solicita ao usuário as informações necessárias para o cadastro.

| Folião | Bloco |
| ----- | ------ |
| ![CadFoliao](https://github.com/user-attachments/assets/0ae71356-dd2e-4112-b3c6-b6b3cbd690ca) | ![CadBloco](https://github.com/user-attachments/assets/2256407f-4b6b-4bea-a3fb-c86325e6b010) |

##### TELA INICIAL

Tela inicial do sistema, mostra ao usuário informações principais:
- Imangens do bloco, para representantes de bloco
- Mapa para foliões

| Folião | Bloco |
| ------ | ----- |
| ![InicialFoliao](https://github.com/user-attachments/assets/29cb9cbf-5e06-4e39-b907-9ea20783ff1f) | ![InicialFoliao](https://github.com/user-attachments/assets/5095427d-1ff9-4c4a-9e5b-1e3837f3c316) |

##### TELA DE CONSULTA DE BLOCOS: Folião

Tela de consulta de blocos, permite que o folião veja todos os blocos cadastrados e, ao selecionar um bloco, veja informações detalhadas sobre ele.

| Consulta de blocos | Bloco selecionado |
| ------ | ----- |
| ![image](https://github.com/user-attachments/assets/1e803cfa-deae-4404-a1fe-5167c56ab17c) | ![image](https://github.com/user-attachments/assets/f4118453-a50a-44ff-bc72-79c36f3b36f8) |

##### TELA DE CONSULTA DE BLOCOS: Organizador

Tela de consulta de blocos, permite que o organizador veja as informações cadastradas de seu bloco e altere essas informações.

|  |
| ------ |
| ![image](https://github.com/user-attachments/assets/8e530844-0cda-482c-80f9-e58f8190a03d) |

##### TELA DE DENÚNCIAS

Tela de denúncias, permite que o usuário realize uma denúncia.

|  |  |
| ------ | ----- |
| ![image](https://github.com/user-attachments/assets/19d44d7d-717a-4173-bb24-29b702eed542) | ![image](https://github.com/user-attachments/assets/8713d3d3-ef8b-444c-aa89-1732c8ed2995) |

##### TELA DE CONVERSAS

Tela de conversas, permite que o usuário se conecte e converse com outros usuários.

| Folião | Bloco |
| ------ | ----- |
| ![image](https://github.com/user-attachments/assets/f2778639-4a06-4652-8ac9-3c2b5f089299) | ![image](https://github.com/user-attachments/assets/cd19c9b3-e4ed-4ea3-ad06-d2070d3e83cf) |

##### TELA DE PERFIL

Tela de perfil, permite que o usuário acesse e altere suas configurações do perfil, como foto, nome de usuário, email.

| Folião | Bloco |
| ------ | ----- |
| ![image](https://github.com/user-attachments/assets/c0aeb6df-dc99-4c4f-82e2-e08ff97dc2b9) | ![image](https://github.com/user-attachments/assets/eee63dbd-af42-4ffa-8de6-bf74d6caf733) |

##### TELA DE INFORMAÇÕES DO BLOCO

Tela de informações do bloco, permite que o organizador acesse e altere as configurações do bloco, como fotos, descrição, estilo musical, etc.

| Informações | Imagens |
| ------ | ----- |
| ![image](https://github.com/user-attachments/assets/92a8bf41-096c-4bf4-9233-c3c11b8581df) | ![image](https://github.com/user-attachments/assets/4fde05ef-ee13-4de5-9b6b-1db7a209c4d8) |

### User Flow
Ao entrar no site ele é direcionado a criar uma conta ou fazer login. Tendo opção entre dois tipos de perfil: Folião ou Organizador
![Fluxo de Telas](files/printFluxoTelas1.png)

Fluxo de Telas para Foliões

![](files/printFluxoTelas2.png)

Fluxo de telas para Organizadores de bloco (algumas telas dos foliões estão disponíveis para eles)
![](files/printFluxoTelas3.png)

### Protótipo Interativo

✅ [Protótipo Interativo (Figma)](https://www.figma.com/proto/lIcNjqnRvlVUjhwUDng2L3/fluxo-de-telas?node-id=0-1&t=YJlqvOI4P2aIrHGR-1)

# Metodologia

API do Google Maps
API de clima

## Ferramentas

| Ambiente                    | Plataforma | Link de acesso                                     |
| --------------------------- | ---------- | -------------------------------------------------- |
| Processo de Design Thinking | Miro       |  https://miro.com/app/board/uXjVIZ5HaSk=/?share_link_id=934339239127 |
| Repositório de código     | GitHub     | https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti1-2010200-hermes_sentry |
| Protótipo do site         | Figma      | https://www.figma.com/design/lIcNjqnRvlVUjhwUDng2L3/fluxo-de-telas?node-id=0-1&p=f&t=jGkhIGoeICWzf4sn-0 |
| Hospedagem do site          | Render     | https://site.render.com/XXXXXXX ⚠️ EXEMPLO ⚠️ |
| Protótipo Interativo       | Figma  | https://www.figma.com/proto/lIcNjqnRvlVUjhwUDng2L3/fluxo-de-telas?node-id=0-1&t=YJlqvOI4P2aIrHGR-1   |
|                             |            |                                                    |

## Gerenciamento do Projeto

Divisão de papéis no grupo e apresentação da estrutura da ferramenta de controle de tarefas (Kanban).

![Exemplo de Kanban](images/exemplo-kanban.png)

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Nesta parte do documento, você deve apresentar  o processo de trabalho baseado nas metodologias ágeis, a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.
>
> **Orientações**:
>
> - [Sobre Projects - GitHub Docs](https://docs.github.com/pt/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
> - [Gestão de projetos com GitHub | balta.io](https://balta.io/blog/gestao-de-projetos-com-github)
> - [(460) GitHub Projects - YouTube](https://www.youtube.com/playlist?list=PLiO7XHcmTsldZR93nkTFmmWbCEVF_8F5H)
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)

# Solução Implementada

Esta seção apresenta todos os detalhes da solução criada no projeto.

## Vídeo do Projeto

O vídeo a seguir traz uma apresentação do problema que a equipe está tratando e a proposta de solução. ⚠️ EXEMPLO ⚠️

[![Vídeo do projeto](images/video.png)](https://www.youtube.com/embed/70gGoFyGeqQ)

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> O video de apresentação é voltado para que o público externo possa conhecer a solução. O formato é livre, sendo importante que seja apresentado o problema e a solução numa linguagem descomplicada e direta.
>
> Inclua um link para o vídeo do projeto.

## Funcionalidades

Esta seção apresenta as funcionalidades da solução.Info

##### Funcionalidade 1 - Cadastro de Foliões 

Permite a criação de usuários comuns dentro da nossa aplicação. Os dados são salvos no nosso db.json.

* **Estrutura de dados:** [Usuários](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti1-2010200-hermes_sentry/tree/master/docs#estrutura-de-dados---usu%C3%A1rios-foli%)
* **Instruções de acesso:**
  * Abra o site na tela principal e clique em login no canto superior direito. (será encaminhado para página de login)
  * Na página de login, selecione o botão "criar conta". Duas opções apareceram selecione o botão "folião"
  * Crie uma conta com todos os dados exigidos. 
* **Tela da funcionalidade**:

![](files/printCadastroFoliao.png)

##### Funcionalidade 2 - Cadastro de Organizadores de blocos 

Permite a inclusão, leitura, alteração e exclusão de contatos para o sistema

* **Estrutura de dados:** [Blocos](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti1-2010200-hermes_sentry/tree/master/docs#estrutura-de-dados---blocos-de-carnaval))
* **Instruções de acesso:**
  * Abra o site na tela principal e clique em login no canto superior direito. (será encaminhado para página de login)
  * Na página de login, selecione o botão "criar conta". Duas opções apareceram selecione o botão "organizador"
  * Crie uma conta com todos os dados solicitados.
* **Tela da funcionalidade**:

![Tela de Funcionalidade](files/printCadastroOrganizador.png)

##### Funcionalidade 3 - Login do usuário 

Permite o usuário logar em sua conta e iniciar o uso do restante do site (antes fica bloqueado). Os dados o usuário logado são passados pelo sessionStorage para as outras páginas.

* **Estrutura de dados:** [Usuario ou Blocos]([#ti_ed_contatos](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti1-2010200-hermes_sentry/tree/master/docs#estrutura-de-dados---blocos-de-carnaval))
* **Instruções de acesso:**
  * Abra o site na tela principal e clique em login no canto superior direito. (será encaminhado para página de login)
  * Na página de login, preencha os dados solicitados e aperte enter para continuar
  * Caso não tenha conta ou não tenha os dados de uma conta existente será necessária a criação de uma nova, como descrito nas outras funcionalidades.
* **Tela da funcionalidade**:

![Tela de Funcionalidade](files/printLogin.png)

##### Funcionalidade 4 - Mapa de Blocos

Permite a vizualização dinâmica da localização dos blocos cadastrados no site através da API do Google Maps inserida na nossa aplicação.

* **Estrutura de dados:** [Blocos](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti1-2010200-hermes_sentry/tree/master/docs#estrutura-de-dados---blocos-de-carnaval))
* **Instruções de acesso:**
  * Garanta que o login foi feito.
  * Acessar a página do mapa clicando no icone de "casa" na barra lateral da página.
  * Na página além de somente vizualizar pode se interagir com o mapa de duas formas: Clicar nos marcadores e acessar mais informações dos blcos, além de escrever o nome do bloco na barra de pesquisa filtrando assim os blocos que aparecem no maoa.
* **Tela da funcionalidade**:

![Tela de Funcionalidade](files/printMapaBlocos.png)

##### Funcionalidade 5 - Mapa de denuncia

Permite a vizualização dinâmica da localização das denuncias feitas atraves do site e através da API do Google Maps inserida na nossa aplicação.

* **Estrutura de dados:** [Denúncia](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti1-2010200-hermes_sentry/tree/master/docs#estrutura-de-dados---den%C3%BAncias)
* **Instruções de acesso:**
  * Garanta que o login foi feito.
  * Acessar a página de denuncia clicando no icone de "denuncia" na barra lateral da página.
  * Na página além de somente vizualizar as denunciar tambem pode se interagir com o mapa de duas formas: Clicar nos marcadores e acessar mais informações sobre a denuncia, além de possibilitar o usuario fazer a propria denuncia.
* **Tela da funcionalidade**:

![Tela de Funcionalidade](files/printMapaDenuncias.png)

##### Funcionalidade 6 - Aba de comentarios do folião

Permite a vizualização dinâmica dos comentarios feitas atraves do site.

* **Estrutura de dados:** [Comentários](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti1-2010200-hermes_sentry/tree/master/docs#estrutura-de-dados---coment%C3%A1rios)
* **Instruções de acesso:**
  * Garanta que o login foi feito pelo folião.
  * Acessar a página dos blocos clicando no icone de "folia" na barra lateral da página e clicar em saiba mais erferente ao bloco em que o usuario deseja realizar o comentario
  * Na página além de vizualizar os comentarios feito por outros usuarios,a avaliação de estrelas e a data que foi realizada o comentario o usuario tambem consegue avaliar com estrelas que variam de 0-5 e deixa o proprio comentario
* **Tela da funcionalidade**:

![Tela de Funcionalidade](files/printAbaComentariosFoliao.png)

##### Funcionalidade 7 - Aba de comentarios do Organizador

Permite a vizualização e interação dinâmica dos comentarios feitas atraves do site.

* **Estrutura de dados:** [Comentários](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti1-2010200-hermes_sentry/tree/master/docs#estrutura-de-dados---coment%C3%A1rios)
* **Instruções de acesso:**
  * Garanta que o login foi feito pelo organizador.
  * Acessar a página dos blocos clicando no icone de "folia" na barra lateral da página.
  * Nessa página além de vizualizar os comentarios feito por outros usuarios,a avaliação de estrelas e a data que foi realizada o comentario o organizador do bloco pode enteragir com o folião que realizou o comentario,ou seja o organizador consegue responder os comentarios

![Tela de Funcionalidade](files/printAbaComentariosOrg.png)

##### Funcionalidade 8 - Aba adicionar imagem sobre o bloco.

Permite a publicação de fotos para incrementar a pagina do bloco no site.

* **Estrutura de dados:** [Blocos](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti1-2010200-hermes_sentry/tree/master/docs#estrutura-de-dados---blocos-de-carnaval)
* **Instruções de acesso:**
  * Garanta que o login foi feito pelo organizador.
  * Acessar a página dos blocos clicando no icone de "folia" na barra lateral da página e acessar o botão "+" no canto inferior direito.
  * Nessa página o organizador do bloco vai conseguir adicionar varias imagem para ir de acordo com o seu bloco e tambem uma descrição sobre essas foto de no max 160 caracteres.

![Tela de Funcionalidade](files/printAddImagem.png)

##### Funcionalidade 9 - Aba em que o organizador edita suas informações pessoais.

Permite que o usuario edite algumas de suas informações armazenadas no site.

* **Estrutura de dados:** [Blocos](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti1-2010200-hermes_sentry/tree/master/docs#estrutura-de-dados---blocos-de-carnaval)
* **Instruções de acesso:**
  * Garanta que o login foi feito pelo organizador.
  * Acessar a página do usuario clicando no icone de "usuario" na barra lateral da página.
  * Nessa página o usuario vai conseguir editar algumas informações sobre ele como:Nome completo,CNPJ,Email e senha.Nessa pagina o usuario tambem pode excluir usa conta ou simplemente sair dela.

![Tela de Funcionalidade](files/printeditUsuarioOrg.png)

##### Funcionalidade 10 - Aba em que o usuario pode editar as suas informações.

Permite que o usuario edite algumas de suas informações armazenadas no site.

* **Estrutura de dados:** [Usuários](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti1-2010200-hermes_sentry/tree/master/docs#estrutura-de-dados---usu%C3%A1rios-foli%)
* **Instruções de acesso:**
  * Garanta que o login foi feito pelo folião.
  * Acessar a página do usuario clicando no icone de "usuario" na barra lateral da página.
  * Nessa página o usuario vai conseguir editar algumas informações sobre ele como:Nome completo,Login,Data de nascimento,Email e senha.Nessa pagina o usuario tambem pode excluir usa conta ou simplemente sair dela.

![Tela de Funcionalidade](files/printEditUsuarioComum.png)

##### Funcionalidade 11 - Aba em que o folião pode procurar por blocos.

Permite que o usuario pesquise por blocos.

* **Estrutura de dados:** [Blocos](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti1-2010200-hermes_sentry/tree/master/docs#estrutura-de-dados---blocos-de-carnaval)
* **Instruções de acesso:**
  * Garanta que o login foi feito pelo folião.
  * Acessar a página dos blocos clicando no icone de "folia" na barra lateral da página.
  * Nessa página o usuario vai conseguir vizualizar 6 blocos,nessa visualização o usario tambem consegue ver o nome do bloco,sua cliassificação em estrelas e uma breve descrição,e tem uma barra de pesquisa para o usuario possa pesquisar os blocos por nome,nessa Barra de pesquisa tambem tem a pesquisa por filtro em que o usuario consegue filtrar a sua pesquisa do bloco.O filtro e sobre Avaliação,Data,Estilo musical,Publico esperado e Faixa Etaria,permitindo com que assim o usuario possa direcionar sua pesquisa para um foco especifico.

![Tela de Funcionalidade](files/printPesquisaBlocos.png) &  ![Tela de Funcionalidade](files/printPesquisaBlocos2.png)

##### Funcionalidade 12 - Aba em que o folião pode procurar por blocos.

Permite o usuario sair da sua conta e vizualizar o clima e temperatura através da API do Google Maps inserida na nossa aplicação.

* **Estrutura de dados:** [Blocos](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti1-2010200-hermes_sentry/tree/master/docs#estrutura-de-dados---blocos-de-carnaval)
* **Instruções de acesso:**
  * Garanta que o login foi feito.
  * Acessar a página principal da aplicação.
  * Nessa página tanto para foliçao e organizadores vão conseguir sair do seu perfil ao passar o mouse em cima do icone de usario no canto superior direito e tambem mostra o clima e a temperatura

![Tela de Funcionalidade](files/printLogout&APIclima.png)

##### Funcionalidade 13 - Aba em que o usuario seleciona o tipo de cadastro.

Permite o usuario realizar o cadasrto do bloco ou de folião.

* **Instruções de acesso:**
  * Garanta que o usuario quer criar uma conta.
  * Passar primeiramente pela tentativa de login
  * Inserir campos validos

![Tela de Funcionalidade](files/printTipoCadastro.png)

##### Funcionalidade 14 - Aba em que o folião pode saber mais sobre o bloco escolhido.

Permite o usuario saber mais sobre o bloco escolhido que o organizador inseriu na nossa aplicação.

* **Estrutura de dados:** [Blocos](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti1-2010200-hermes_sentry/tree/master/docs#estrutura-de-dados---blocos-de-carnaval)
* **Instruções de acesso:**
  * Garanta que o login foi feito.
  * Acessar a página dos blocos clicando no icone de "folia" na barra lateral da página e selecionar o bloco em seguida clicar em "ver mais".
  * Nessa página o usuario vai conseguir vizualizar as informações colocadas pelo organizador,como imagens,comentarios,descrições,publico alvo,faixa etario,localização,o usuario tambem consegue vizualizar os comentarios realizados por outros usuarios e a classificação em estrelas desse bloco.

![Tela de Funcionalidade](files/printPaginaBlocos.png)

##### Funcionalidade 15 - Aba em que o organizador do bloco pode editar e adicionar suas informações sobre o bloco.

Permite o organizador editar e adicionar suas informações sobre o seu blovo que o mesmo inseriu na nossa aplicação.

* **Estrutura de dados:** [Blocos](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti1-2010200-hermes_sentry/tree/master/docs#estrutura-de-dados---blocos-de-carnaval)
* **Instruções de acesso:**
  * Garanta que o login foi feito por um organizador.
  * Acessar a página dos blocos clicando no icone de "folia" na barra lateral.
  * Nessa página o usuario vai conseguir vizualizar/adiconar e editar as informações colocadas pelo proprio organizador,como Nome,telefone,data,faixa etaria,endereço,estilo musical e descrição.

![Tela de Funcionalidade](files/printEditBloco.png)

##### Funcionalidade 16 - Aba em que o usuario pode realizar uma denuncia.

Permite o organizador realizar uma denuncia e inserir na nossa aplicação.

* **Estrutura de dados:** [Denuncai](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti1-2010200-hermes_sentry/tree/master/docs#estrutura-de-dados---den%C3%BAncias)
* **Instruções de acesso:**
  * Garanta que o login foi feito.
  * Acessar a página das denuncias clicando no icone de "bandeira" na barra lateral.
  * Nessa página o usuario vai conseguir adicionar uma denuncia detalhada sobre o ocorrido com hora,localização de referencia e descrição.

![Tela de Funcionalidade](files/printCriacaoDenuncia.png)

## Estruturas de Dados

Todas as estruturas descritas estão juntas no mesmo arquivo db.json. Estão funcionando como API Restful por meio do node.js.

##### Estrutura de Dados - Blocos de Carnaval   

Cadastro de blocos de carnaval, com um único organizador atrelado a cada bloco, além de um objeto para imagens e descrição para cards.

```json
  {
      "id": 1,
      "nome_bloco": "Filhos da PUC",
      "descricao_geral": "O Bloco Filhos da PUC é composto por uma bateria vibrante formada por estudantes universitários. Com muita alegria e irreverência, o bloco desfila pelas ruas da Savassi. fwokenfoiw  kjweg nfoiwengoiwq fiownqifnwo3ir rw3jfnwiqnfqoin3qkw fokweno",
      "avaliacao": 4.5,
      "data": "2026-02-13",
      "publico": 20000,
      "cep": "39442-218",
      "endereco": "R. Pernambuco - Savassi, Belo Horizonte - MG, 39442-218, Brasil",
      "faixa_etaria": "18+",
      "lat": -19.9350252,
      "lng": -43.9346582,
      "estilo_musical": "Axé, Pop",
      "organizador": [
        {
          "nome_org": "João P. Andrade",
          "email_org": "joao@filhosdapuc.com",
          "cnpj": "12.345.678/0001-00",
          "senha": "senha123"
        }
      ],
      "postagem": [
        {
          "descricao_card": "Samba no pé, tradição e muita energia no coração da Savassi.",
          "imagens": [
            {
              "id": 1,
              "src": "../assets/img/blocoexemplo.jpg"
            },
            {
              "id": 2,
              "src": "../assets/img/blocoexemplo.jpg"
            },
            {
              "id": 3,
              "src": "../assets/img/blocoexemplo.jpg"
            },
            {
              "id": 4,
              "src": "../assets/img/blocoexemplo.jpg"
            }
          ]
        }
      ]
    },
  
```

##### Estrutura de Dados - Usuários Foliões

Registro dos usuários do sistema utilizados para login e para o perfil do sistema.

```json
  {
      "id": 2,
      "nome_completo": "João Campos",
      "login": "joaoo",
      "email": "joaoao@gmail.com",
      "data_nasc": "2002-02-12",
      "senha": "12345",
      "chat": {
        "contacts": [],
        "groups": [],
        "messages": {}
      }
 },
```

##### Estrutura de Dados - Denúncias

Cadastro de denúncias com descrição e localização para exibição em mapa interativo.

```json
  {
      "id": 1,
      "horario": "16:30",
      "bloco": "Filhos da PUC",
      "local": "R. Pernambuco - Savassi, Belo Horizonte - MG, 39442-218, Brasil",
      "lat": -19.9350252,
      "lng": -43.9346582,
      "ocorrido": "assalto"
    },
```

##### Estrutura de Dados - Comentários

Cadastro de comentários atrelados a cada página de blocos, com objeto para armazenar a resposta do organizador bloco.

```json
  {
      "id": 1,
      "blocoId": 1,
      "usuarioId": 1,
      "texto": "Muito animado! A bateria estava perfeita e o clima super divertido.",
      "avaliacao": 5,
      "data": "2025-05-28T15:30:00",
      "resposta": {
        "texto": "Obrigado pelo feedback!",
        "data": "2025-06-02T21:40:56.072Z",
        "organizadorId": "99"
      }
 },
```

## Módulos e APIs

Esta seção apresenta os módulos e APIs utilizados na solução

**Estrutura de Dados**:

* NPM/JSON-Server - [https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server)

**Mapa**:

* Google Maps/Place API - [https://developers.google.com/maps/apis-by-platform?hl=pt-br](https://developers.google.com/maps/apis-by-platform?hl=pt-br)

**Clima**:

* Open Weather - [https://openweathermap.org/api](https://openweathermap.org/api)

**Fonts:**

* Icons Font Face - [https://fontawesome.com/](https://fontawesome.com/)
* Google Fonts - [https://fonts.google.com/](https://fonts.google.com/)

**Scripts:**

* jQuery - [http://www.jquery.com/](http://www.jquery.com/) 
* Bootstrap 4 - [http://getbootstrap.com/](http://getbootstrap.com/) 

# Referências

As referências utilizadas no trabalho foram:

* CAMBRAIA, Duda. Carnaval em BH: número de blocos cadastrados cresce 220% em 10 anos: prefeitura de belo horizonte espera 6 milhões de foliões durante o período. Prefeitura de Belo Horizonte espera 6 milhões de foliões durante o período. 2025. Disponível em: https://www.cnnbrasil.com.br/nacional/sudeste/mg/carnaval-em-bh-numero-de-blocos-cadastrados-cresce-3116-em-10-anos/. Acesso em: 29 jun. 2025.

* MINAS, Agência. Governo de Minas registra redução em crimes monitorados durante o Carnaval 2025. 2025. Disponível em: https://www.seguranca.mg.gov.br/index.php/noticias/governo-de-minas-registra-reducao-em-crimes-monitorados-durante-o-carnaval-2025-como-homicidios-roubos-e-importunacao-sexual. Acesso em: 29 jun. 2025.
