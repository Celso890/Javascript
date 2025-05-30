var date = new Date()
var hora = date.getHours()
var msg = document.getElementById('msg')

msg.innerHTML = `Agora são ${hora} horas!`

if (hora < 12 ) {
    
}