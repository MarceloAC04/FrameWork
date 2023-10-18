const camisaLascote = {
    descricao: "Camisa Polo",
    preco: 589.97,
    tamanho: "m",
    cor: "Amarela",
    presente: true
}

const {descricao, preco} = camisaLascote;
const {presente} = camisaLascote.presente;

console.log("PRODUTO:");

console.log(`
    

    Descrição: ${descricao}
    Preço: ${preco}
    Presente: ${ presente ? "sim" : "não"}
`);