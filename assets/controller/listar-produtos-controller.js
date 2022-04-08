import { produtoService } from "../../service/produto-service.js"
import { templateProdutosController } from "./template-produtos-controller.js"


(async () => {
    const quantidadeMaxItens = 6;

    const categoria1 = 'Star Wars';
    const secao1 = 'star-wars';
    try{
        const produtosCategoria1 =  await produtoService.buscarProdutosCategoria(categoria1);
        if(produtosCategoria1.length > 0){
            templateProdutosController.criarNovaSecao(secao1, categoria1, categoria1);
            templateProdutosController.listarProdutos(produtosCategoria1, secao1, quantidadeMaxItens);
        }
    }
    catch(erro){
        console.log(erro);
    }

    const categoria2 = 'Consoles';
    const secao2 = 'consoles';
    try{
        const produtosCategoria2 =  await produtoService.buscarProdutosCategoria(categoria2);
        if(produtosCategoria2.length > 0){
            templateProdutosController.criarNovaSecao(secao2, categoria2, categoria2);
            templateProdutosController.listarProdutos(produtosCategoria2, secao2, quantidadeMaxItens);
        }
    }
    catch(erro){
        console.log(erro);
    }

    const categoria3 = 'Diversos';
    const secao3 = 'diversos';
    try{
        const produtosCategoria3 =  await produtoService.buscarProdutosCategoria(categoria3);
        if(produtosCategoria3.length > 0){
            templateProdutosController.criarNovaSecao(secao3, categoria3, categoria3);
            templateProdutosController.listarProdutos(produtosCategoria3, secao3, quantidadeMaxItens);
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
