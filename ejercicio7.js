//Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

//Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.


function contarRango(inicio, fin) {
    let contador = 0;
  
    for (let i = inicio + 1 ; i < fin; i++) {
      contador++;
    }
  
    return contador;
  }
  
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0