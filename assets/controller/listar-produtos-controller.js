import { produtoService } from "../../service/produto-service.js"

const encontraItemPeloId = (itemId, id) => {
    console.log(`${itemId} -- ${itemId == id ? true : false}`)
    return itemId == id ? true : false;
}

const listarProdutos = (produtos, sessao, quantidadeMaxItens) => { // sessão pode estar vazia
    let i;
    for(i = 0; i < quantidadeMaxItens; i++){
        if(produtos[i]){
            criarNovoItem( 
                produtos[i].id,
                produtos[i].nome,
                produtos[i].categoria,
                produtos[i].valor,
                produtos[i].img,
                sessao
            );
        }
    }
}

const criarNovoItem = (id, nome, categoria, valor, img, sessao) => {
    let elementoLista;

    if(sessao && sessao != ""){
        elementoLista = $(`[data-produto-lista="${sessao}"]`);
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

(async () => {
    const quantidadeMaxItens = 6;

    const categoria1 = 'Star Wars';
    const sessao1 = 'primeira';
    const elementoTitulo1 = $('[data-produtos-secao-titulo1]');
    try{
        const produtosCategoria1 =  await produtoService.buscarProdutosCategoria(categoria1);
        if(produtosCategoria1.length > 0){
            listarProdutos(produtosCategoria1, sessao1, quantidadeMaxItens);
            elementoTitulo1.text(categoria1);
        }
    }
    catch(erro){
        console.log(erro);
    }

    const categoria2 = 'Consoles';
    const sessao2 = 'segunda';
    const elementoTitulo2 = $('[data-produtos-secao-titulo2]');
    try{
        const produtosCategoria2 =  await produtoService.buscarProdutosCategoria(categoria2);
        if(produtosCategoria2.length > 0){
            listarProdutos(produtosCategoria2, sessao2, quantidadeMaxItens);
            elementoTitulo2.text(categoria2);
        }
    }
    catch(erro){
        console.log(erro);
    }

    const categoria3 = 'Diversos';
    const sessao3 = 'terceira';
    const elementoTitulo3 = $('[data-produtos-secao-titulo3]');
    try{
        const produtosCategoria3 =  await produtoService.buscarProdutosCategoria(categoria3);
        if(produtosCategoria3.length > 0){
            listarProdutos(produtosCategoria3, sessao3, quantidadeMaxItens);
            elementoTitulo3.text(categoria3);
        }
    }
    catch(erro){
        console.log(erro);
    }

    //--será usado para excluir um produto--
    // const elementoProdutoLista = $('[data-ver-produto]').each(()=>{
    //     return $(this).closest('[data-produto-id]');
    // });

    // elementoProdutoLista.click(function(evento){
    //     const produtoADetalhar = evento.target.closest('[data-produto-id]');
    //     const idProdutoADetalhar = produtoADetalhar.getAttribute("data-produto-id");
        
    // })
    
})();


export const listarProdutosController = {
    criarNovoItem,
    listarProdutos,
    encontraItemPeloId
}