const numeroDeAes = (cadena) => {
    
    const matches = cadena.match(/a/gi);
  
    
    return matches ? matches.length : 0;
  };
  

  const resultado = numeroDeAes("JavaScript es asombroso");
  console.log(resultado); 