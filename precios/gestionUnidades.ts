const mil = 10000;
const millon = 1000000;
const A = 1e9;
const B = 1e12;
const C = 1e15;
const D = 1e18;
const E = 1e21;
const F = 1e24;
const G = 1e27;
const H = 1e30;
const I = 1e33;
const J = 1e36;
const K = 1e39;
const L = 1e42;
const M = 1e45;
const N = 1e48;
const O = 1e51;
const P = 1e54;
const Q = 1e57;
const R = 1e60;
const S = 1e63;
const T = 1e66;
const U = 1e69;
const V = 1e72;
const W = 1e75;
const X = 1e78;
const Y = 1e81;
const Z = 1e84;

export function formatoCifra(numero: number) {
  if (numero >= mil && numero < millon) {
    const unidades = Math.floor(numero / 1000);
    return `${unidades}K`;
  } else if (numero >= millon && numero < A) {
    const unidades = Math.floor(numero / millon);
    return `${unidades}M`;
  } else if (numero >= A && numero < B) {
    const unidades = Math.floor(numero / A);
    return `${unidades}A`;
  } else if (numero >= B && numero < C) {
    const unidades = Math.floor(numero / B);
    return `${unidades}B`;
  } else if (numero >= C && numero < D) {
    const unidades = Math.floor(numero / C);
    return `${unidades}C`;
  } else if (numero >= D && numero < E) {
    const unidades = Math.floor(numero / D);
    return `${unidades}D`;
  } else if (numero >= E && numero < F) {
    const unidades = Math.floor(numero / E);
    return `${unidades}E`;
  } else if (numero >= F && numero < G) {
    const unidades = Math.floor(numero / F);
    return `${unidades}F`;
  } else if (numero >= G && numero < H) {
    const unidades = Math.floor(numero / G);
    return `${unidades}G`;
  } else if (numero >= H && numero < I) {
    const unidades = Math.floor(numero / H);
    return `${unidades}H`;
  } else if (numero >= I && numero < J) {
    const unidades = Math.floor(numero / I);
    return `${unidades}I`;
  } else if (numero >= J && numero < K) {
    const unidades = Math.floor(numero / J);
    return `${unidades}J`;
  } else if (numero >= K && numero < L) {
    const unidades = Math.floor(numero / K);
    return `${unidades}K`;
  } else if (numero >= L && numero < M) {
    const unidades = Math.floor(numero / L);
    return `${unidades}L`;
  } else if (numero >= M && numero < N) {
    const unidades = Math.floor(numero / M);
    return `${unidades}M`;
  } else if (numero >= N && numero < O) {
    const unidades = Math.floor(numero / N);
    return `${unidades}N`;
  } else if (numero >= O && numero < P) {
    const unidades = Math.floor(numero / O);
    return `${unidades}O`;
  } else if (numero >= P && numero < Q) {
    const unidades = Math.floor(numero / P);
    return `${unidades}P`;
  } else if (numero >= Q && numero < R) {
    const unidades = Math.floor(numero / Q);
    return `${unidades}Q`;
  } else if (numero >= R && numero < S) {
    const unidades = Math.floor(numero / R);
    return `${unidades}R`;
  } else if (numero >= S && numero < T) {
    const unidades = Math.floor(numero / S);
    return `${unidades}S`;
  } else if (numero >= T && numero < U) {
    const unidades = Math.floor(numero / T);
    return `${unidades}T`;
  } else if (numero >= U && numero < V) {
    const unidades = Math.floor(numero / U);
    return `${unidades}U`;
  } else if (numero >= V && numero < W) {
    const unidades = Math.floor(numero / V);
    return `${unidades}V`;
  } else if (numero >= W && numero < X) {
    const unidades = Math.floor(numero / W);
    return `${unidades}W`;
  } else if (numero >= X && numero < Y) {
    const unidades = Math.floor(numero / X);
    return `${unidades}X`;
  } else if (numero >= Y && numero < Z) {
    const unidades = Math.floor(numero / Y);
    return `${unidades}Y`;
  } else {
    return numero;
  }
}
export function notacionCientifica(numero: number) {
    if(numero >=10000){
        const exponente = Math.floor(Math.log10(Math.abs(numero)));
    const coeficiente = (numero / Math.pow(10, exponente)).toFixed(1);

    const resultado = coeficiente + "e" + exponente;

    return resultado;
    }else {
        return numero;
      }
}
