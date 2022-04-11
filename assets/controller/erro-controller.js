import { templateProdutosController } from "./template-produtos-controller.js";

(()=>{
    const url = new URL(window.location);
    const erro = url.searchParams.get('erro');
    const elementoTextoErro = $('[data-erro-texto]');

    elementoTextoErro.append(erro);
    templateProdutosController.voltarPagina();
})();