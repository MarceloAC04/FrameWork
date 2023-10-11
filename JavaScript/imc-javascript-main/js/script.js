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
    const imc = calcularImc(altura, peso)
    const situacao = retornaSituacao(imc);
    console.log(nome);
    console.log(altura);
    console.log(peso);
    console.log(imc);
    console.log(situacao);

    //calcular imc
    function calcularImc(altura, peso) {
        return peso / Math.pow(altura,2);
    }

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
    }
}