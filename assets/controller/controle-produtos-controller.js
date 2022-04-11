import { produtoService } from "../../service/produto-service.js"
import { templateProdutosController } from "./template-produtos-controller.js"

( async () => {

    const secao = 'geral';
    const tituloSecao = 'Todos os Produtos';

    const produtos = await produtoService.buscarProdutosNome("");
    templateProdutosController.criarNovaSecaoControle(secao, tituloSecao);
    templateProdutosController.listarProdutosControle(produtos, secao);
    const elementoLixeira = $('[data-icon-lixeira]').each(()=>{
        return $(this);
    });

    elementoLixeira.click(async (evento)=>{
        const elementoProdutoExcluir = evento.target.closest('[data-produto-id]');
        const idProdutoExcluir = elementoProdutoExcluir.getAttribute("data-produto-id");
        
        try{
            const resposta = await produtoService.deletarProduto(idProdutoExcluir)
            elementoProdutoExcluir.remove();
        }
        catch(erro){ //se der erro, faça isso:
            console.log(erro);
            window.location.href = '../telas/erro.html';
        }

    });




})();