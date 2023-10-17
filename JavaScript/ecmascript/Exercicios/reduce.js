const numeros = [10, 12 ,20];

const resultado = numeros.reduce((total, n) => {
    return total + n;
}, 0);

console.log(resultado);

const produtos = [
    {produtos: "Camiseta", preco: 129.90},
    {produtos: "Tênis", preco: 350.97},
    {produtos: "Jaqueta de Couro", preco: 700.1}
]

let toProduto = produtos.reduce((VlInicial, oP) => {
    return VlInicial + oP.preco;
}, 0)

console.log(`Gerente o total de vendas é: R$${toProduto}`);