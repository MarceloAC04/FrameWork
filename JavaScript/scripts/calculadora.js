function calcular() {
    event.preventDefault(); //parar o submit do formulario
    //Criar uma variável para cada número

    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let op = document.getElementById('operacao').value;
    let resultado; //undefined

    if ( isNaN(n1) || isNaN(n2)) {
        alert('È necessário digitar apenas números')
        return;
    }
    
    if (op == '+') {
         resultado = somar(n1, n2);
    } else if (op == '-') {
        resultado = subtrair(n1,n2);
    } else if (op == '*') {
        resultado = multiplicar(n1,n2);
    } else if (op == '/') {
        resultado = dividir(n1,n2);
    } else {
        return alert('Nenhuma operação selecionada!')
    }

    //inserir o resultado em HTML (DOM)
    document.getElementById('result').innerText = resultado
    // exibir o resultado em um alert - usando interpolacao
    //alert(`O resultado da operação é ${resultado}`);
}

function somar(n1, n2) {
    return n1 + n2;
}

function subtrair(n1, n2) {
   return n1 - n2;
}

function multiplicar(n1, n2) {
   return n1 * n2;
}
function dividir(n1, n2) {
    if (n2 == 0) {
        return alert('Não é possível dividir por 0');
    }
   return n1 / n2;
}