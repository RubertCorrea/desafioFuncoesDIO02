function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
const pessoa01 = {
        nome: "maria",
        idade: 30
}
const pessoa02 = {
    nome: "giovana",
    idade: 14
}
const animal01 = {
    nome: "fiona",
    idade: 5, 
    raca: "pug",
};

console.log(calculaIdade.call(pessoa01, 10));
console.log(calculaIdade.call(pessoa02, 10));
console.log(calculaIdade.call(animal01, 10));


console.log(calculaIdade.apply(pessoa01, [10]));
console.log(calculaIdade.apply(pessoa02, [10]));
console.log(calculaIdade.apply(animal01, [10]));