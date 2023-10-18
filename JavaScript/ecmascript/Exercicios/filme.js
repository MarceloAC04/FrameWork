const filme = {
    titulo: "Platoon",
    anoLancamento: "1988",
    genero: "Guerra",
    emCartaz: false
};

const {titulo, anoLancamento, genero, emCartaz} = filme;

console.log(`
    Título: ${titulo}
    Ano de Lançamento: ${anoLancamento}
    Gênero: ${genero}
    Em Cartaz: ${emCartaz ? "Sim" : "Não"}
`);

const filmes = [
   {
        titulo: "The Good, The Bad and The Ugly",
        anoLancamento: "1966",
        genero: "Faroeste",
        emCartaz: false
    },
    {
        titulo: "Oppenheimer",
        anoLancamento: "2023",
        genero: "Drama",
        emCartaz: true
    }
]

filmes.forEach( ({titulo, anoLancamento, genero, emCartaz}) => {

    console.log(`
    Título: ${titulo}
    Ano de Lançamento: ${anoLancamento}
    Gênero: ${genero}
    Em Cartaz: ${emCartaz ? "Sim" : "Não"}
`);
});