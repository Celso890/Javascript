

function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var date = new Date()
    var hora = date.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora > 6 && hora < 12 ) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#FEC86C'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#E5615C'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#5E4475'
    }
}


