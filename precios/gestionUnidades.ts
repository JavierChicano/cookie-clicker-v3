const letras = ['mil', 'millon', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const letras2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

export function formatoCifra(numero: number) {
  let maxLetras = letras.length; //Esto es igual a 28
  let maxLetras2 = letras2.length; //Esto es igual a 26
  let computo = maxLetras;
  let reinicioRealizado = false;

  for (let i = maxLetras - 1; i >= 0; i--) {
    //El maximo que adquiere numeroMaximo es 10 e 87 ()
    const numeroMaximo = Math.pow(10, 3 * (i + 1));

    const limite1Letra = Math.pow(10, 3 * 87);

    if (numero >= numeroMaximo && numero < limite1Letra) {
      const unidades = Math.floor(numero / Math.pow(10, 3 * (i + 1)));

      return `${unidades}${letras[i]}`;
    }else if(numero >= limite1Letra){
      for(let j = maxLetras2 - 1; j >= 0; j-- ){
        //El numeroMaximo que coge sería de 10 elevado a 3 * (28) --> que luego pasa a ser 28+26*X
        const numeroMaximo2 = Math.pow(10, 3 * (computo + j + 1));
        if(numero >= numeroMaximo2){
          const unidades = Math.floor(numero / Math.pow(10, 3 * (computo + j + 1)));
          reinicioRealizado = false;
          return `${unidades}${letras[i]}${letras2[j]}`;
        }
      }
      //Le sumamos la longitud del array (26)
      computo += maxLetras2;

      if (!reinicioRealizado && i === 0) {
        reinicioRealizado = true;
        i = maxLetras-1;
      }
    }
  }
  return numero;
}

export function notacionCientifica(numero: number) {
  if (numero >= 10000) {
    const exponente = Math.floor(Math.log10(Math.abs(numero)));
    const coeficiente = (numero / Math.pow(10, exponente)).toFixed(1);

    const resultado = coeficiente + "e" + exponente;

    return resultado;
  } else {
    return numero;
  }
}


      //necesitamos 2 bucles que recorran letras2
      //el primero empieza en A y luego vamos cambiando la segunda letra
      //cuando la segunda letra llegue a Z terminamos el bucle y cambiamos a B
      //y por tanto el bucle interno se reinicia (empieza en A de nuevo).

      //reiniciamos i para que empiece a recorrer letras2
      //esto sólo tiene que pasar UNA VEZ
      //i=letras2.length-1;
      //const unidades = Math.floor(numero / Math.pow(10, 3 * (i + 1)));
      //return `${unidades}${letras2[i]}${letras2[j]}`;
      // Verificamos si ya se hizo el reinicio