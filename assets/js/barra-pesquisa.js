export function abrirBarraPesquisa(elementoClicado, elementoFecharBarraPesquisa){
    const elementoBarraPesquisa = $('[data-barra-pesquisa]');
    const elementoBarraPesquisaInput = $('[data-barra-pesquisa__input]');

    elementoClicado.toggle();
    elementoFecharBarraPesquisa.toggle();

    elementoBarraPesquisa.removeClass('barra-pesquisa--fechar');
    elementoBarraPesquisa.removeClass('barra-pesquisa--fechada');
    elementoBarraPesquisa.addClass('barra-pesquisa--abrir');
    elementoBarraPesquisaInput.focus();
}

export function fecharBarraPesquisa(elementoClicado, elementoAbrirBarraPesquisa){
    const elementoBarraPesquisa = $('[data-barra-pesquisa]');

    elementoClicado.toggle();
    elementoAbrirBarraPesquisa.toggle();
    
    elementoBarraPesquisa.removeClass('barra-pesquisa--abrir');
    elementoBarraPesquisa.addClass('barra-pesquisa--fechar');
    
    setTimeout(function(){
        elementoBarraPesquisa.addClass('barra-pesquisa--fechada');
    }, 800);
}

