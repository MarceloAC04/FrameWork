let nome = ['Marcelo', 'Manoel', 'Fernando', 'Heitor', "Lionel"];

let sobrenome = ['Araujo', 'Cardoso', 'Diniz', 'Gomes', 'Messi'];

let nomesCompletos = nome.map((nome, i) => {
    return `${nome} ${sobrenome[i]}`;
});

nomesCompletos.forEach((nc) => {
    console.log(nc);
 });