const numeros = [1, 2, 200, 10, 7, 12, 15, 8]

const nMenor10 = numeros.filter((n) => {
    return n < 10;
})


console.log(nMenor10);

const comentarios = [
    {comentario: "Bla bla bla", exibe: true},
    {comentario: "Evento é uma merda", exibe: false},
    {comentario: "Ótimo evento!", exibe: true},
]

const comentariosOK = comentarios.filter((c) => {
    return c.exibe === true;
})

console.log(comentariosOK);