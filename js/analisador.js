let num = document.getElementById('numeroAnalisador');
let lista = document.getElementById('listaAnalisador');
let res = document.getElementById('res');
let valores = [];

function numeros(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        false
    }
}

function adicionar() {
    if(numeros(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = '';
    } else {
        window.alert('Valor inválido ou já encontrado na lista.');
    }   
        num.value = '';
        num.focus();
}

function finalizar () {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar.');
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for (let pos in valores) {
            soma += valores[pos];
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / total;
        res.innerHTML = '';
        res.innerHTML += `<p>Foram cadastrados ${total} de números.</p>`;
        res.innerHTML += `<p>O maior valor cadastrado é ${maior} .</p>`;
        res.innerHTML += `<p>O menor valor cadastrado é ${menor} .</p>`;
        res.innerHTML += `<p>A soma dos números cadastrados é ${soma}.</p>`;
        res.innerHTML += `<p>A média dos números cadastrados é ${media}.</p>`;
    }
}