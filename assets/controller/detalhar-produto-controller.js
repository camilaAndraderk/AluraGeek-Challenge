import { produtoService } from "../../service/produto-service.js"
import { templateProdutosController } from "./template-produtos-controller.js"



(async () => {
    const url = new URL(window.location);
    const idProduto = url.searchParams.get('id');
    const secao = "produtos-relacionados";
    const tituloSecao = "Produtos Relacionados";
    
    try{
        const produtoPrincipal = await produtoService.buscarProdutosId(idProduto);
        templateProdutosController.criarTemplateDetalheProduto(
            produtoPrincipal.id,
            produtoPrincipal.nome,
            produtoPrincipal.valor,
            produtoPrincipal.img,
            produtoPrincipal.descricao
        )
        try{
            const produtosRelacionados = await produtoService.buscarProdutosCategoria(produtoPrincipal.categoria);
            const produtosRelacionadosValidos = produtosRelacionados.filter(produto => {
                return !templateProdutosController.encontraItemPeloId(produto.id, produtoPrincipal.id)
            })
            if(produtosRelacionadosValidos.length > 0 ){
                templateProdutosController.criarNovaSecao(secao, tituloSecao);
                templateProdutosController.listarProdutos(produtosRelacionadosValidos, secao, 6); 
            }
        }
        catch(erro){
            console.log(erro);
        }
    }
    catch(erro){
        console.log(erro);
        window.location.href = `./erro.html?erro=${erro}`
    }


})();

