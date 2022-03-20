
import { abrirBarraPesquisa } from './barra-pesquisa.js';
import { fecharBarraPesquisa } from './barra-pesquisa.js';

$(function(){

    /* Abrindo e fechando barra de pesquisa */
    const iconeAbrirPesquisa = $('.lupa-individual');

    const elementoAbrirBarraPesquisa = $('.lupa-individual__lupa');
    const elementoFecharBarraPesquisa = $('.lupa-individual__fechar');
    const barraPesquisa = $('barra-pesquisa');

    elementoAbrirBarraPesquisa.click(function(){
        abrirBarraPesquisa($(this), elementoFecharBarraPesquisa);
    });

    elementoFecharBarraPesquisa.click(function(){
        fecharBarraPesquisa($(this), elementoAbrirBarraPesquisa);
    });

});