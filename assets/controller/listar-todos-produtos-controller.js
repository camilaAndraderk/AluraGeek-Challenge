import { produtoService } from "../../service/produto-service.js"
import { templateProdutosController } from "./template-produtos-controller.js"

( async () => {
    const url = new URL(window.location);
    const secao = 'geral';
    let tituloSecao = "Todos os produtos";

    if(url.searchParams.get('nome')){ // quando usa a barra de pesquisa, é pesquisado por um nome
        const nomePesquisa = url.searchParams.get('nome');
        tituloSecao = `Resultados da pesquisa: ${nomePesquisa}`;
        try{
            const produtos = await produtoService.buscarProdutosNome(nomePesquisa);
            templateProdutosController.criarNovaSecao(secao, tituloSecao, tituloSecao);
            templateProdutosController.listarProdutos(produtos, secao, 'sem limite')
        }
        catch(erro){
            console.log(erro);
            window.location.href = `./erro.html?erro=${erro}`;
        }
    }

    else if(url.searchParams.get('categoria')){ // quando clica em 'ver todos', é repassada a categoria da seção
        const categoriaPesquisa = url.searchParams.get('categoria');
        tituloSecao = `Todos os Produtos: ${categoriaPesquisa}`;

        try{
            const produtos = await produtoService.buscarProdutosCategoria(categoriaPesquisa);
            templateProdutosController.criarNovaSecao(secao, tituloSecao, );
            templateProdutosController.listarProdutos(produtos, secao, categoriaPesquisa)
        }
        catch(erro){
            console.log(erro);
            window.location.href = `./erro.html?erro=${erro}`;
        }

    }

    else{
        try{
            const produtos = await produtoService.buscarProdutosNome("");
            templateProdutosController.criarNovaSecao(secao, tituloSecao, "" );
            templateProdutosController.listarProdutos(produtos, secao, "sem limite")
        }
        catch(erro){
            console.log(erro);
            window.location.href = `./erro.html?erro=${erro}`;
        }
    }



    
})();