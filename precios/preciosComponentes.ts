
//Precios base
export const preciosComponentes: Map<string, number> = new Map([
    ["Arma", 10],
    ["Soldado", 15],
    ["Sargento", 20],
    ["Capitan", 35],
    ["PowerUps", 10],
    ["Talentos", 15],
    ["Reliquias", 20],
  ]);

//Calcular Precio componentes mejoras
const factorIncrementoMejoras = 0.3;

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