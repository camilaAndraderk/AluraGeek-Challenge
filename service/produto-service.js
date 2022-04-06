const buscarProdutosCategoria = (categoria) => {
    return fetch(`http://localhost:3000/produtos/?categoria=${categoria}`)
    .then((reposta)=>{
        if(reposta.ok){
            return reposta.json();
        }
        throw new Error('Não foi possível listar os produtos');
    });
}

const buscarProdutosId = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`)
    .then((reposta)=>{
        if(reposta.ok){
            return reposta.json();
        }
        throw new Error('Não foi possível listar o produto');
    });
}

export const produtoService = {
    buscarProdutosCategoria,
    buscarProdutosId
};