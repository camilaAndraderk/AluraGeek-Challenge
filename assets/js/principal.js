
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
    const elementoAbrirBarraPesquisa = $('[data-abrir-barra-pesquisa]');
    const elementoFecharBarraPesquisa = $('[data-fechar-barra-pesquisa]');

    elementoAbrirBarraPesquisa.click(function(){
        abrirBarraPesquisa($(this), elementoFecharBarraPesquisa);
    });

    elementoFecharBarraPesquisa.click(function(){
        fecharBarraPesquisa($(this), elementoAbrirBarraPesquisa);
    });

    // Fazendo uma pesquisa
    $('[data-botao-pesquisa]').click((evento)=>{
        evento.preventDefault();
        console.log(evento.target);
        const textoPesquisa = $('[data-barra-pesquisa-input]').val();

        window.location.href = `./produtos-todos.html?nome=${textoPesquisa}`;
    });

});