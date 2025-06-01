var numero = document.getElementById('inumero')
var lista = document.getElementById('iquadro')
var res = document.getElementById('resultado')
var valores = []

function inList(n, l){
    if(l.indexOf(n) == -1){
        return true
    } else {
        return alert("Valor inválido ou já encontrado na lista.")
    }
}

function adicionar(){
    //caso o usuário não digitar nada
    if (numero.value.length == 0){
        alert('Digite um valor para adicionar!')
    }
    //verifiva se é um número entre 1 e 100
    var num = Number(numero.value)
    
    if (num < 1 || num > 100) {
        alert('Digite um valor válido entre 1 e 100 !')
    } else if(inList(num, valores) == true) { //verifica se é repetido
        valores.push(num) //acrescenta no vetor
        var opcao = document.createElement('option') //cria a opção
        opcao.text = `Valor ${num} foi adicionado.` 
        lista.appendChild(opcao)
        res.innerHTML = ''
    }
    numero.value = '' //limpa a parte onde digita o valor (0-100)
    numero.focus()
}    

function finalizar(){
    res.innerHTML = ''
    var tamanho = valores.length
    var i = 0
    var maior = valores[0]
    var menor = valores[0]
    var soma = 0

    if(tamanho == 0){
        alert('Adicione valores antes de finalizar!')
    } else {
        for (i = 0; i < tamanho; i++){ // (let i in valores)
            if(valores[i] > maior){
                maior = valores[i]
            }
            if(valores[i] < menor){
                menor = valores[i]
            }
            soma += valores[i]
        }
        var media = (soma/tamanho)

        res.innerHTML += `<br>Ao todo, temos ${tamanho} números cadastrados.<br>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>` 
    }
}

