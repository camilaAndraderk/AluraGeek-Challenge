const buscarProdutosCategoria = (categoria) => {
    return fetch(`http://localhost:3000/produtos/?categoria_like=${categoria}&_sort=nome,valor&_order=asc,asc`)
    .then((resposta)=>{
        if(resposta.ok){
            return resposta.json();
        }
        throw new Error('Não foi possível listar os produtos');
    });
}

const buscarProdutosNome = (nome) => {
    return fetch(`http://localhost:3000/produtos/?nome_like=${nome}&_sort=nome,valor&_order=asc,asc`)
    .then((resposta)=>{
        if(resposta.ok){
            return resposta.json();
        }
        throw new Error('Não foi possível listar os produtos')
    })
}

const buscarProdutosId = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`)
    .then((resposta)=>{
        if(resposta.ok){
            return resposta.json();
        }
        throw new Error('Não foi possível listar o produto');
    });
}

export const produtoService = {
    buscarProdutosCategoria,
    buscarProdutosNome,
    buscarProdutosId
};