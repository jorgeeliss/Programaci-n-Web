const numeroDeCaracteres = (cadena, caracter) => (
    cadena.split(caracter).length - 1
  );
  
  
  const resultado = numeroDeCaracteres("JavaScript es genial", "a");
  console.log(resultado);
  