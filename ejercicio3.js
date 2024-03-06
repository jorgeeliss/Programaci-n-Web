//Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

//"Bajo de peso" si el BMI < 18.5
//"Normal" si está entre 18.5 y 24.9
//"Sobrepeso" si está entre 25 y 29.9
//"Obeso" si es igual o mayor a 30

//formula BMI peso / altura^2

function BMI (peso, altura) {

    const calcularbmi = peso/altura**2;
    
    if (calcularbmi <= 18.5) {

        return "bajo peso"
    }

    if (calcularbmi >= 18.5 && calcularbmi <= 24.9) {
        return "normal"
    }

    if (calcularbmi >= 25 && calcularbmi <= 29.9 ) {
        return "sobrepeso"

    }

    if (calcularbmi >= 30) {
        return "obeso"
    }
}

console.log(BMI(65, 1.8)) // "Normal"
console.log(BMI(72, 1.6)) // "Sobrepeso"
console.log(BMI(52, 1.75)) //  "Bajo de peso"
console.log(BMI(135, 1.7)) // "Obeso"