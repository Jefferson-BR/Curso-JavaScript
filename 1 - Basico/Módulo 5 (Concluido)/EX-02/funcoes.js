function parimpar(n){
    if (n%2 == 0){
        return 'Par!'
    }
    else{
        return 'Impar!'
    }
}

console.log(parimpar(1))

function fatorial(n){
    let fat = 1
    for(let numero = n; numero > 1; numero--){
        fat *= numero
    }
    return fat
}

console.log(fatorial(5))

// 5! = 5x4x3x2x1 = 120