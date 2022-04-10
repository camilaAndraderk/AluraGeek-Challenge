export function criarCabecalho(){
    const cabecalho =
                        `<div class="cabecalho__principal">
                            <section class="cabecalho__principal__secao">
                                <a href="./index.html" class="logo logo-principal">
                                    <img src="../assets/img/Vector-logo.svg" alt="Logo da loja" class="logo__img" loading="lazy">
                                    <h1 class="logo__titulo">
                                        <img src="../assets/img/AluraGeek-alura.svg" alt="Alura" class="logo__titulo__img" loading="lazy">
                                        <img src="../assets/img/AluraGeek-geek.svg" alt="Geek" class="logo__titulo__img" loading="lazy">
                                    </h1>
                                </a>
                                <form action="" class="barra-pesquisa" data-barra-pesquisa>
                                    <input type="text" class="barra-pesquisa__input" data-barra-pesquisa-input placeholder="O que deseja encontrar?" pattern="[A-Za-z]{3}">
                                    <button class="barra-pesquisa__botao" data-botao-pesquisa>
                                        <img src="../assets/img/Vector-lupa.svg" alt="Lupa para pesquisar" class="barra-pesquisa__imagem" loading="lazy">
                                    </button>
                                </form>
                            </section>
                            <div class="cabecalho__botao">
                                <a href="./login.html" class="botao botao2 cabecalho__botao--login">Login</a>
                                <a href="./index.html" class="botao botao2 cabecalho__botao--logout">Sair</a>
                                <a href="./produtos-home.html" class="botao botao2 cabecalho__botao__menu">Menu administrador</a>
                            </div>
                            <span class="lupa-individual">
                                <button class=" lupa-individual__botao lupa-individual--abrir" data-abrir-barra-pesquisa>
                                    <img src="../assets/img/Vector-lupa-principal.svg" alt="Lupa de pesquisa" loading="lazy">
                                </button>
                                <button class="lupa-individual__botao lupa-individual--fechar" data-fechar-barra-pesquisa type="submit">
                                    <p>X</p>
                                </button>
                            </span>
                        </div>`;
    return cabecalho;
}