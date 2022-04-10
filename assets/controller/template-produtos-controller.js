const encontraItemPeloId = (itemId, id) => {
    return itemId == id ? true : false;
}

const voltarPagina = () => {
    $('[data-botao-voltar]').click(()=>{
        history.back();
    })
}

const criarTemplateSemResultadosPesquisa = () => {
    return `
        <div class="erro-pesquisa">

            <p class="erro-pesquisa__texto">Que pena! Não existem resultados para esta pesquisa.</p>
            <img src="../assets/img/darth-vader-confuso.webp" atl="Foto do Grogu triste" loading="lazy" class="erro-pesquisa__img">
            <button class="botao botao1--azul1 erro-pesquisa__botao" data-botao-voltar>Voltar à página anterior</button>
        </div>
    `;
}

const listarProdutos = (produtos, secao, quantidadeMaxItens) => { // sessão pode estar vazia
    const elementoSecaoProdutos = $('[data-produtos]');
    const quantidadeProdutos = produtos.length;
    let i;

    if(quantidadeProdutos > 0){
        if($.isNumeric(quantidadeMaxItens) && quantidadeProdutos < quantidadeMaxItens){
            for(i = 0; i < quantidadeMaxItens; i++){
                if(produtos[i]){
                    criarNovoItem( 
                        produtos[i].id,
                        produtos[i].nome,
                        produtos[i].categoria,
                        produtos[i].valor,
                        produtos[i].img,
                        secao
                    );
                }
            }
        }
        else{ // se é para exibir todos
            produtos.forEach(produto => {
                criarNovoItem( 
                    produto.id,
                    produto.nome,
                    produto.categoria,
                    produto.valor,
                    produto.img,
                    secao
                );
            });
        }
    }
    else{
        elementoSecaoProdutos.append(criarTemplateSemResultadosPesquisa());
        voltarPagina();
    }

}

const criarNovaSecao = (secao, tituloSecao, categoria) => {
    const elementoSecaoProdutos = $('[data-produtos]');

    const template = `
        <section class="produtos__secao">
            <div class="produtos__secao__cabecalho">
                <h3 class="produtos__secao__titulo" data-produtos-secao-titulo>${tituloSecao}</h3>
                <a href="./produtos-todos.html?categoria=${categoria}" class="produtos__secao__link">
                    Ver tudo
                    <img src="../assets/img/Vector-seta-direita.svg" alt="Seta para direita" class="produtos__secao__img" loading="lazy">
                </a>
            </div>
            <ul class="produtos__lista" data-produto-lista="${secao}">
                
            </ul>
        </section>
    `;

    elementoSecaoProdutos.append(template);
}

const criarNovoItem = (id, nome, categoria, valor, img, secao) => {
    let elementoLista;

    if(secao && secao != ""){
        elementoLista = $(`[data-produto-lista="${secao}"]`);
    }
    else{
        elementoLista = $(`[data-produto-lista]`);
    }
    
    const template = `
        <li class="produtos__item" data-produto-id="${id}">
            <div class="produtos__cabecalho">
                <img src="${img}" alt="Foto do produto" class="produtos__img" loading="lazy">
            </div>
            <div class="produtos__conteudo">
                <h6 class="produtos__nome">${nome}</h6>
                <p class="produtos__valor">R$ <span>${valor}</span></p>
                <a href="../pages/produto.html?id=${id}" class="produtos__link" data-ver-produto>Ver Produto</a>
            </div>
        </li>
    
    `;
    
    elementoLista.append(template);

}

const criarTemplateDetalheProduto = (id, nome, valor, img, descricao) =>{
    const elementoDetalhaPdoruto = $('[data-descricao-produto]');
    const template = `
        <img src="${img}" alt="Foto do produto" class="descricao-produto__img">
        <div class="produtos-descricao__conteudo">
            <h3 class="produtos-descricao__titulo">${nome}</h3>
            <p class="produtos-descricao__valor">
                R$ <span>${valor}</span>
            </p>
            <p class="produtos-descricao__descricao">${descricao}</p>
        </div>
    `;

    elementoDetalhaPdoruto.append(template);
    elementoDetalhaPdoruto.attr("data-produto-id", id);
    // elementoDetalhaPdoruto.addAttr(`data-produto-id="${id}"`);
}


export const templateProdutosController = {
    encontraItemPeloId,
    listarProdutos,
    criarNovaSecao,
    criarNovoItem,
    criarTemplateDetalheProduto
}