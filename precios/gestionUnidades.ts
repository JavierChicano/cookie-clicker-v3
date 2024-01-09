const letras = ['mil', 'millon', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const letras2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

export function formatoCifra(numero: number) {
  let maxLetras = letras.length;
  
  for (let i = maxLetras - 1; i >= 0; i--) {
    const limite1Letra = Math.pow(10, 3 * (i + 1));
    
    if (numero >= limite1Letra ) {
      const unidades = Math.floor(numero / Math.pow(10, 3 * (i + 1)));
      return `${unidades}${letras[i]}`;
    }
    else{

      //necesitamos 2 bucles que recorran letras2
      //el primero empieza en A y luego vamos cambiando la segunda letra
      //cuando la segunda letra llegue a Z terminamos el bucle y cambiamos a B
      //y por tanto el bucle interno se reinicia (empieza en A de nuevo).

      //reiniciamos i para que empiece a recorrer letras2
      //esto sólo tiene que pasar UNA VEZ
      //i=letras2.length-1;
      //const unidades = Math.floor(numero / Math.pow(10, 3 * (i + 1)));
      //return `${unidades}${letras2[i]}${letras2[j]}`;

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
