import { produtoService } from "../../service/produto-service.js"

const criarTemplatePrincipal = (id, nome, valor, img, descricao) =>{
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

(async () => {
    const url = new URL(window.location);
    const idProduto = url.searchParams.get('id');
    
    const produto = await produtoService.buscarProdutosId(idProduto);
    criarTemplatePrincipal(
        produto.id,
        produto.nome,
        produto.valor,
        produto.img,
        produto.descricao
    );

})();

