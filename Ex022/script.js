var numero = document.getElementById('inumero')
var resultado = document.getElementById('iquadro')
//var num = Number(numero.value)

function adicionar(){
    if (numero.value.length == 0){
        alert('Digite um valor para adicionar!')
    } else {
        let num = Number(numero.value)
        if (num <= 0 || num > 100) {
            alert('Digite um valor válido entre 1 e 100 !')
        } else {
            let opcao = document.createElement('option')
            opcao.innerHTML = `Valor ${num} adicionado`
            document.resultado.appendChild(opcao)

        }
    }
}