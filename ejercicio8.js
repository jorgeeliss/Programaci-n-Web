//Escribir una función llamada sumarRango que reciba dos argumentos:
// número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

//Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.

function sumarRango (numeroinicial,numerofinal) {

    let suma = 0;


    for (let i = numeroinicial; i <= numerofinal; i++ ){
        suma+=i // suma = suma+i
    }

    return suma;
}

console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0
console.log(sumarRango(15, 19))