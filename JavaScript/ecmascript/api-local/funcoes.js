const urlViaCep = "https://viacep.com.br/ws";


async function cadastrar(e) {
    e.preventDefault();
    preencherContato();

    fetch(" http://localhost:3000/testes", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({data})
    })
        .then((Response) => Response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error", error));
}

async function buscarEndereco(cep) {
    // complemento do endereço da API
    const resource = `/${cep}/json/`

    try {
        const promise = await fetch(urlViaCep + resource);
        //transforma o json retornado em um objeto ou array
        const endereco = await promise.json();
        console.log(endereco);

        //prenche o formulario
        preencherCampo({
            endereco: endereco.logradouro,
            bairro: endereco.bairro,
            cidade: endereco.localidade,
            estado: endereco.uf
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
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.cidade;
    document.getElementById("estado").value = endereco.estado;
}

function preencherContato() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const pais = document.getElementById("pais").value;
    const ddd = document.getElementById("ddd").value;
    const telefone = document.getElementById("telefone").value;
    const cep = document.getElementById("cep").value;
    const endereço = document.getElementById("endereco").value;
    const bairro = document.getElementById("bairro").value;
    const estado = document.getElementById("estado").value;
    const anotacoes = document.getElementById("anotacoes").value;
    
   return data = {
        nome,
        email,
        pais,
        ddd,
        telefone,
        cep,
        endereço,
        bairro,
        estado,
        anotacoes
    };
}