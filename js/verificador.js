function verificar() {
    var anoNasc = document.getElementById('ano');    
    var data = new Date();
    var ano = data.getFullYear();         
    var res = document.querySelector('div.resultado');

    if (anoNasc.value.length == 0 || Number(anoNasc.value) > ano ) {
        window.alert('ERRO - Verificar os dados e tentar novamente!')
    } else {
        var idade = ano - Number(anoNasc.value)
        var genero = '';
        var sexo = document.getElementsByName('sexo');        
        var img = document.querySelector('#foto')

        } if (sexo[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade <= 14){
                img.setAttribute('src', 'img/homemBB.png')
            } else if (idade <= 21) {
                img.setAttribute('src', 'img/homemJovem.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'img/homemAdulto.png')
            } else {
                img.setAttribute('src', 'img/homemVelho.png')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade <= 14){
                img.setAttribute('src', 'img/mulherBB.png')
            } else if (idade <= 21) {
                img.setAttribute('src', 'img/mulherJovem.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'img/mulherAdulta.png')
            } else {
                img.setAttribute('src', 'img/mulherIdosa.png')
            }
        }
            res.style.textAlign = 'center';
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
            res.appendChild(img);
}