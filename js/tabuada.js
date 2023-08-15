function tabuada() {
    let num = document.getElementById('numero');
    let tab = document.getElementById('tabela');   
        
    if (num.value.length == 0) {
        window.alert('Digite um número válido!');
    } else {
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = '';

        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            tab.appendChild(item);                        
            c++
        }
    }
}