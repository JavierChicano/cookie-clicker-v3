const letras = ['mil', 'millon', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

export function formatoCifra(numero: number) {
  const maxLetras = letras.length;
  
  for (let i = maxLetras - 1; i >= 0; i--) {
    const limiteSuperior = Math.pow(10, 3 * (i + 1));
    
    if (numero >= limiteSuperior) {
      const unidades = Math.floor(numero / Math.pow(10, 3 * (i + 1)));
      return `${unidades}${letras[i]}`;
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
