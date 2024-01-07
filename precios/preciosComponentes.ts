
//Precios base
export const preciosComponentes: Map<string, number> = new Map([
    ["Arma", 10],
    ["Soldado", 15],
    ["Sargento", 20],
    ["Capitan", 450],
    ["PowerUps", 10],
    ["Talentos", 15],
    ["Reliquias", 20],
  ]);

//Calcular Precio componentes mejoras
const factorIncrementoMejoras = 1.2;

export function calcularPrecioMejoras(precioBase: number, vecesComprado: number): number {
    const precioCalculado = precioBase * Math.pow((1 + factorIncrementoMejoras), vecesComprado);
    return Math.floor(precioCalculado);
}

//Calcular Precio componentes tienda
const factorIncrementoTienda = 1.5;

export function calcularPrecioTienda(precioBase: number, vecesComprado: number): number {
    const precioCalculado = precioBase * Math.pow((1 + factorIncrementoTienda), vecesComprado);
    return Math.floor(precioCalculado);
}

//Hacer la del coste del candado
const factorIncrementoCandado = 5;

export function calcularPrecioCandado(precioBase: number, vecesComprado: number): number {
    const precioCalculado = precioBase * Math.pow((1 + factorIncrementoCandado), vecesComprado);
    return Math.floor(precioCalculado);
}
