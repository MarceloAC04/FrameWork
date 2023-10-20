const urlViaCep = "https://viacep.com.br/ws";

function cadastrar(e) {
    e.preventDefault();
}

async function buscarEndereco(cep) {
    // complemento do endereço da API
    const resource = `/${cep}/json/`
    
    try {
        const promise = await fetch(urlViaCep+resource);
        //transforma o json retornado em um objeto ou array
        const endereco = await promise.json();
        console.log(endereco);

        //prenche o formulario
        preencherCampo({
            endereco : endereco.longradouro,
            bairro : endereco.bairro,
            cidade : endereco.cidade,
            estado : endereco.estado
        });
        
        //reseta o span do cep inválido
        document.getElementById("not-found").innerText = ""
    } catch (error) {
        alert(error);

        document.getElementById("not-found").innerText = "cep inválido"
    }
}

function preencherCampo(endereco) {

    endereco.longradouro = document.getElementById("endereco").value;
    endereco.bairro = document.getElementById("bairro").value;
    endereco.cidade = document.getElementById("cidade").value;
    endereco.estado = document.getElementById("estado").value;
}