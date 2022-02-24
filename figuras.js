//cógido del cuadrado
console.group('Cuadrado')
// const ladoCuadrado = 5;
// console.log('Los lados del cuadrado miden:' + ladoCuadrado + ' cm');

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log('El perimetro del cuadrado mide:' + perimetroCuadrado + ' cm');

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log('El area del cuadrado mide:' + areaCuadrado + 'cm²');

console.groupEnd()
// Código del triángulo

console.group('Triangulo')

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
// 'Los lados del triángulo miden: ' 
// + ladoTriangulo1 + ' cm, ' 
// + ladoTriangulo2 + ' cm, ' 
// + baseTriangulo + ' cm.'
// );

// const alturaTriangulo = 5.5;
// console.log('La altura del triángulo mide:' + alturaTriangulo + 'cm');

function perimetroTriangulo(lado1, lado2, base) {
      return (lado1 + lado2 + base);
} 

function areaTriangulo(base, altura) {
    return (base*altura)/2
} 
// console.groupEnd()

//Código del círculo

console.group('Círculos');

//Radio
// const radioCirculo = 4;
// console.log('El radio del círculo mide: ' + radioCirculo + ' cm.');

//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

//PI
const PI = Math.PI
console.log('PI es ' + PI);

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}


console.groupEnd();

//Altura de un triangulo isoceles

function alturaIsosceles(a,b,c) {
    if (a === b) {
        var resultado1 = Math.sqrt((a*a) - ((c/2)*(c/2)));
        var aproximado = resultado1.toFixed(4)
        return aproximado
    } else if (a === c) {
        var resultado2 = Math.sqrt((a*a) - ((b/2)*(b/2)));
        var aproximado2 = resultado2.toFixed(4);
        return aproximado2
    } else if (b === c) {
        var resultado3 = Math.sqrt((b*b) - ((a/2)*(a/2)));
        var aproximado3 = resultado3.toFixed(4);
        return aproximado3
    } else 
        return 'Lo que introduciste NO un es un triángulo isósceles'
}

//Aquí interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("lado1");
    const value1 = Number (lado1.value);

    const lado2 = document.getElementById('lado2')
    const value2 = Number (lado2.value);

    const base = document.getElementById('base')
    const valueBase = Number (base.value);

    const perimetro = perimetroTriangulo(value1, value2, valueBase);

    alert(perimetro);
}
function calcularAreaTriangulo(){

    const base = document.getElementById('base')
    const valueBase = Number (base.value);

    const altura = document.getElementById("altura")
    const valueAltura = Number(altura.value);

    const area = areaTriangulo(valueBase, valueAltura);

    alert(area);
}

function calcularDiametro() {
    const radio = document.getElementById("InputRadio");
    const valueRadio = Number(radio.value);

    const diametro = diametroCirculo(valueRadio)
    alert(diametro)
}

function calcularArea() {
    const radio = document.getElementById("InputRadio");
    const valueRadio = Number(radio.value);

    const area = areaCirculo(valueRadio);

    alert(area)
}

function calcularAlturaIsosceles() {
    const lado1 = document.getElementById("InputLado1")
    const valueLado1 = Number(lado1.value)

    const lado2 = document.getElementById("InputLado2")
    const valueLado2 = Number(lado2.value)

    const lado3 = document.getElementById("InputLado3")
    const valueLado3 = Number(lado3.value)

    const altura = alturaIsosceles(valueLado1, valueLado2, valueLado3)

    alert(altura)
}
