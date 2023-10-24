const urlViaCep = "https://viacep.com.br/ws";
const urlProfessorCep = "http://172.16.35.155:3000/myceps";

async function cadastrar(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const cep = document.getElementById("cep").value;
    const endereco = document.getElementById("endereco").value.trim();
    const numero = document.getElementById("numero").value;
    const cidade = document.getElementById("cidade").value.trim();
    const uf = document.getElementById("uf").value.trim();

    objCadastro = {
        nome,
        email,
        cep,
        endereco,
        numero,
        cidade,
        uf
    }

    try {
        const promise = await fetch('http://172.16.35.155:3000/contatos', {
            method: "POST",
            headers: {"Context-Type" : "application/json"},
            data: JSON.stringify(objCadastro)
        });
        const dados = await promise.json()

        console.log(dados);
        
    } catch (error) {
        console.log("Deu pau")
    }

    // if (!validaForm(nome, endereco, cep)) {
    //     alert("Preencher todos os forms")
    //     return;
    // }
}

// function validaForm(nome, endereco, cep) {
//     console.log(nome)
//     console.log(endereco)
//     console.log(cep)

//     if (
//         nome.length == 0 || nome === undefined ||
//         endereco.length == 0 || endereco === undefined ||
//         cep.length < 8 || cep === undefined
//     ) {
//         return false;
//     }
//     return true;
// }

async function buscarEndereco(cep) {
    // complemento do endereço da API
    // const resource = `/${cep}/json/`
    
    try {
        // const promise = await fetch(urlViaCep+resource);

        const promise = await fetch(`${urlProfessorCep}/${cep}`);
        //transforma o json retornado em um objeto ou array
        const endereco = await promise.json();
        console.log(endereco);
        //prenche o formulario
        preencherCampo({
            endereco : endereco.logradouro,
            cidade : endereco.localidade,
            uf : endereco.uf
        });
        
        //reseta o span do cep inválido
        document.getElementById("not-found").innerText = ""
    } catch (error) {
        alert(error);

        document.getElementById("not-found").innerText = "cep inválido"
    }
}

function preencherCampo(endereco) {

    document.getElementById("endereco").value = endereco.endereco;
    document.getElementById("cidade").value = endereco.cidade;
    document.getElementById("uf").value = endereco.uf;
}