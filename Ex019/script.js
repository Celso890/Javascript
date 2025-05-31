function gerar(){
    var num = document.getElementById('inumero')
    var res = document.getElementById('itabuada')
    var txt = document.getElementById('itab')
    
    //txt.innerHTML = 'Digite um número'
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        var numero = Number(num.value)
        res.innerHTML = ''      
        for (var i = 1; i <= 10; i++) {
            var produto = numero * i
            res.innerHTML += `<option value = "valor${i}"> ${numero} x ${i} = ${produto}</option>` //poderia usar o document.createElement('option')
        }
    }
}