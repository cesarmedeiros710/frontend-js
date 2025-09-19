let nomes = ["Paulo", "Pedro", "Clara", "Kevyn", "Gabriel"];
console.log ("terceiro nome:", nomes [2]); 

nomes.push("Lyncoln");
nomes.unshift("Carol");
console.log("Array após adicionar:", nomes);

nomes.pop();
console.log("Array atualizado:", nomes);

// map
let numeros = [2, 4, 6, 8];
let dobrados = numeros.map(num => num * 2);
console.log("Valores dobrados:", dobrados);

// filter
let lista = [1, 3, 5, 7, 9]
let maioresCinco = lista.filter(num => num > 5);
console.log("Maiores do que 5:", maioresCinco);
