function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('resultado')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Erro. Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 14){
                img.setAttribute('src', 'imagens/bebe_masc.jpg') 
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/jovem_masc.jpg') //jovem
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/adulto_masc.jpg') //adulto
            } else {
                img.setAttribute('src', 'imagens/idoso_masc.jpg') //idoso
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 14){
                img.setAttribute('src', 'imagens/bebe_fem.jpg') //criança
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/jovem_fem.jpg') //jovem
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/adulto_fem.jpg') //adulto
            } else {
                img.setAttribute('src', 'imagens/idoso_fem.jpg')//idoso
            }
        }
        img.style.borderRadius= "50%"
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos. `
        res.appendChild(img)
    }

}