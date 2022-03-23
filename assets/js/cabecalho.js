export function criarCabecalho(){
    const cabecalho =
                        `<div class="cabecalho__principal">
                            <a href="./index.html" class="logo logo-principal">
                                <img src="./assets/img/Vector-logo.svg" alt="Logo da loja" class="logo__img" loading="lazy">
                                <h1 class="logo__titulo">
                                    <img src="./assets/img/AluraGeek-alura.svg" alt="Alura" class="logo__titulo__img" loading="lazy">
                                    <img src="./assets/img/AluraGeek-geek.svg" alt="Geek" class="logo__titulo__img" loading="lazy">
                                </h1>
                            </a>
                            <form action="" class="barra-pesquisa">
                                <input type="text" class="barra-pesquisa__input" placeholder="O que deseja encontrar?">
                                <button class="barra-pesquisa__botao">
                                    <img src="./assets/img/Vector-lupa.svg" alt="Lupa para pesquisar" class="barra-pesquisa__imagem" loading="lazy">
                                </button>
                            </form>
                            <div class="cabecalho__botao">
                                <a href="/login" class="botao botao2 cabecalho__botao--login">Login</a>
                                <a href="/login" class="botao botao2 cabecalho__botao--logout">Sair</a>
                            </div>
                            <span class="lupa-individual">
                                <img src="./assets/img/Vector-lupa-principal.svg" alt="Lupa de pesquisa" class="lupa-individual__lupa" loading="lazy">
                                <p class="lupa-individual__fechar">X</p>
                            </span>
                        </div>`;
    return cabecalho;
}