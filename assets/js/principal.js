
import { abrirBarraPesquisa } from './barra-pesquisa.js';
import { fecharBarraPesquisa } from './barra-pesquisa.js';
import { criarCabecalho } from './cabecalho.js';
import { criarRodape } from './rodape.js';
import { criarSobreAutor } from './rodape.js';

$(function(){

    // Adicionando cabeçalho
    const cabecalho = $(".cabecalho");
    cabecalho.html(criarCabecalho());

    // Adicionando rodapé e sobre o autor
    const rodape = $(".rodape");
    rodape.html(criarRodape());
    rodape.append(criarSobreAutor());


    /* Abrindo e fechando barra de pesquisa */
    const elementoAbrirBarraPesquisa = $('.lupa-individual__lupa');
    const elementoFecharBarraPesquisa = $('.lupa-individual__fechar');

    elementoAbrirBarraPesquisa.click(function(){
        abrirBarraPesquisa($(this), elementoFecharBarraPesquisa);
    });

    elementoFecharBarraPesquisa.click(function(){
        fecharBarraPesquisa($(this), elementoAbrirBarraPesquisa);
    });

});