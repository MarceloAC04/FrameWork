const arrPessoa = [];

function calcular() {
    event.preventDefault();
    
    //pega os dados do forms
    const nome = document.getElementById("nome").value.trim();
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    
    if (isNaN(altura) || isNaN(peso) || nome.length == 0) {
        alert("È necessário os números correspondentes");
        return;
    }

    // calcular o imc
    const imc = calcularImc(altura, peso);
    const txtSituacao = retornaSituacao(imc);

    const pessoa = {nome, altura, peso, imc, situacao: txtSituacao};

    //adiciona  a pessoa na lista
    arrPessoa.push(pessoa);
    
    //Chama a função listar pessoa
    ListarPessoa();
    
};

//calcula o IMC
function calcularImc(altura, peso) {
    return peso / Math.pow(altura,2);
};

//retorna a situação da pessoa em relação ao seu IMC
function retornaSituacao(imc) {
    if (imc <= 18.5) {
        return 'Magreza severa';
    } else  if (imc <= 24.99) {
        return'Peso normal';
    } else  if (imc <= 29.99) {
        return 'Acima do peso';
    } else  if (imc <= 34.99) {
        return 'Obesidade I';
    } else  if (imc <= 39.99) {
        return 'Obesidade II !! (Severa)';
    } else {
        return 'Cuidado!!';
    }
};

function ListarPessoa() {
    let template = "";
    arrPessoa.forEach((p) => {
        template += `
            <tr>
                <td>${p.nome}</td>
                <td>${p.altura}</td>
                <td>${p.peso}</td>
                <td>${p.imc.toFixed(2)}</td>
                <td>${p.situacao}</td>
            </tr>`
        });
        console.log(template);
        document.getElementById('cadastro').innerHTML = template;
};