import { produtoService } from "../../service/produto-service.js"
import { listarProdutosController } from "../controller/listar-produtos-controller.js"

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
    
    try{
        const produtoPrincipal = await produtoService.buscarProdutosId(idProduto);
        criarTemplatePrincipal(
            produtoPrincipal.id,
            produtoPrincipal.nome,
            produtoPrincipal.valor,
            produtoPrincipal.img,
            produtoPrincipal.descricao
        )
        try{
            const produtosRelacionados = await produtoService.buscarProdutosCategoria(produtoPrincipal.categoria);
            const produtosRelacionadosValidos = produtosRelacionados.filter(produto => {
                return !listarProdutosController.encontraItemPeloId(produto.id, produtoPrincipal.id)
            })
          
            listarProdutosController.listarProdutos(produtosRelacionadosValidos, "", 6); // é uma sessao generica, portanto não existe valor
        }
        catch(erro){
            console.log(erro);
        }
    }
    catch(erro){
        console.log(erro);
    }

})();

