import { produtoService } from "../../service/produto-service.js";

(async () => {
    const elementoImg = $('[data-img-produto]');
    const elementoNome = $('[data-nome-produto]');
    const elementoCategoria = $('[data-categoria-produto]');
    const elementoValor = $('[data-valor-produto]');
    const elementoDescricao = $('[data-descricao-produto]');

    const url = new URL(window.location);
    const idPRodutoEditar = url.searchParams.get('id');
    const produto = await produtoService.buscarProdutosId(idPRodutoEditar);

    elementoImg.attr('src', produto.img);
    elementoNome.val(produto.nome);
    elementoCategoria.val(produto.categoria);
    elementoValor.val(produto.valor);
    elementoDescricao.val(produto.descricao);
})();