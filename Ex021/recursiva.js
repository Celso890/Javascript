function tabuada(n, x = 1){
    if ( x > 10){
        return
    } else {
        var produto = n * x
        console.log(`${n} x ${x} = ${produto}`)
        tabuada(n, x + 1)  
    }
}

console.log(tabuada(5))