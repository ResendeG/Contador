function contar() {
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passo');
    let res = document.getElementById('resultado');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossível utilizar o contador com esses dados!`;
    } else {
        // Transformando as variáveis em números:
        let p = Number(passo.value);
        let i = Number(inicio.value);
        let f = Number(fim.value);
        res.innerHTML = 'Contagem: <br>'

        if(p <= 0) {
            res.innerHTML = `Passo inválido! Considerando Passo = 1: `;
            p = 1
        }

        if (i < f) { 
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
            res.innerHTML +=  `${c} \u{1F4A8} `;
            }
        } else {
            // Contagem decrescente
            for (let c = i; c >= f; c -= p) {
            res.innerHTML +=  `${c} \u{1F4A8} `;
            }
        }
        res.innerHTML +=  ` \u{1F3C1}`;
}}