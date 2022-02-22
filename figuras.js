//cógido del cuadrado
console.group('Cuadrado')
const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden:' + ladoCuadrado + ' cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perimetro del cuadrado mide:' + perimetroCuadrado + ' cm');

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('El area del cuadrado mide:' + areaCuadrado + 'cm²');

console.groupEnd()
// Código del triángulo

console.group('Triangulo')

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
'Los lados del triángulo miden: ' 
+ ladoTriangulo1 + ' cm, ' 
+ ladoTriangulo2 + ' cm, ' 
+ baseTriangulo + ' cm.'
);

const alturaTriangulo = 5.5;
console.log('La altura del triángulo mide:' + alturaTriangulo + 'cm');

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log('El perímetro del triángulo mide:' + perimetroTriangulo + ' cm');

const areaTriangulo = (baseTriangulo*alturaTriangulo) / 2
console.log('El área del triángulo mide: ' + areaTriangulo + ' cm²');

console.groupEnd()

//Código del círculo

console.group('Círculos');

//Radio
const radioCirculo = 4;
console.log('El radio del círculo mide: ' + radioCirculo + ' cm.');

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log('El diámetro del círculo mide: ' + diametroCirculo + ' cm.');

//PI
const PI = Math.PI
console.log('PI es ' + PI);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI
console.log('El perímetro del círculo mide: ' + perimetroCirculo + ' cm.');

//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI
console.log('El área del círculo mide: ' + areaCirculo + ' cm.');

console.groupEnd();