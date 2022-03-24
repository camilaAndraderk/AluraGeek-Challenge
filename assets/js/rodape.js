export function criarRodape(){
    const rodape = 
                    `<div class="rodape__principal">
                        <a href="./index.html" class="logo rodape__logo">
                            <img src="../assets/img/Vector-logo.svg" alt="Logo da loja" class="logo__img" loading="lazy">
                            <h1 class="logo__titulo">
                                <img src="../assets/img/AluraGeek-alura.svg" alt="Alura" class="logo__titulo__img" loading="lazy">
                                <img src="../assets/img/AluraGeek-geek.svg" alt="Geek" class="logo__titulo__img" loading="lazy">
                            </h1>
                        </a>

                        <ul class="links-importantes">
                            <li class="links-importantes__item">
                                <a href="#" class="links-importantes__link">Quem Somos</a>
                            </li>
                            <li class="links-importantes__item">
                                <a href="#" class="links-importantes__link">Política de privacidade</a>
                            </li>
                            <li class="links-importantes__item">
                                <a href="#" class="links-importantes__link">Programa fidelidade</a>
                            </li>
                            <li class="links-importantes__item">
                                <a href="#" class="links-importantes__link">Nossas lojas</a>
                            </li>
                            <li class="links-importantes__item">
                                <a href="#" class="links-importantes__link">Quero ser franqueado</a>
                            </li>
                            <li class="links-importantes__item">
                                <a href="#" class="links-importantes__link">Anuncie aqui</a>
                            </li>
                        </ul>

                        <form class="fale-conosco">
                            <h class="fale-conosco__titulo">Fale conosco</h>
                            <label class="fale-conosco__label" for="nome-pessoa">
                                Nome
                                <input type="text" id="nome-pessoa" name="nome-pessoa" class="fale-conosco__input">
                            </label>
                            <label class="fale-conosco__label" for="mensagem-pessoa">Mensagem
                                <textarea name="mensagem-pessoa" id="mensagem-pessoa" class="fale-conosco__input fale-conosco__text-area" rows="10"></textarea>
                            </label>
                            <button class="botao botao2--azul1">Enviar Mensagem</button>
                        </form>
                    </div>`;
    return rodape;
}

export function criarSobreAutor(){
    const sobreAutor = 
                        `<div class="sobre-autor">
                            <p>Desenvolvido por Camila Andrade</p>
                            <p>2022</p>
                        </div>`;
    return sobreAutor;
}