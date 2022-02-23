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
    return lado1 + lado2 + base;
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