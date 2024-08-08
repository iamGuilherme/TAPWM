function calcularMaiorIf() {
    let num1 = parseFloat(document.getElementById('num1-if').value);
    let num2 = parseFloat(document.getElementById('num2-if').value);
    let num3 = parseFloat(document.getElementById('num3-if').value);
    let num4 = parseFloat(document.getElementById('num4-if').value);
    let maior = maiorNumeroIfs(num1, num2, num3, num4);
    document.getElementById('resultado-if').textContent = 'Maior número: ' + maior;
}

function maiorNumeroIfs(a, b, c, d) {
    let maior = a;
    if (b > maior) maior = b;
    if (c > maior) maior = c;
    if (d > maior) maior = d;
    return maior;
}

function calcularMaiorMax() {
    let num1 = parseFloat(document.getElementById('num1-max').value);
    let num2 = parseFloat(document.getElementById('num2-max').value);
    let num3 = parseFloat(document.getElementById('num3-max').value);
    let num4 = parseFloat(document.getElementById('num4-max').value);
    let maior = maiorNumeroMathMax(num1, num2, num3, num4);
    document.getElementById('resultado-max').textContent = 'Maior número: ' + maior;
}

function maiorNumeroMathMax(a, b, c, d) {
    return Math.max(a, b, c, d);
}

function ordenarNumeros() {
    let num1 = parseFloat(document.getElementById('num1-ordem').value);
    let num2 = parseFloat(document.getElementById('num2-ordem').value);
    let num3 = parseFloat(document.getElementById('num3-ordem').value);
    let ordenados = ordenarTresNumeros(num1, num2, num3);
    document.getElementById('resultado-ordem').textContent = 'Ordem crescente: ' + ordenados.join(', ');
}

function ordenarTresNumeros(a, b, c) {
    let numeros = [a, b, c];
    numeros.sort((x, y) => x - y);
    return numeros;
}