function calcularIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    }anos de idade. `;
}
const pessoa1={
    nome:'Amanda',
    idade:23,
};
const pessoa2={
 nome: 'Mariana',
    idade:16,
};
const pessoa3={
    nome:'jasmine',
    idade:14,
};
const animal={
    nome:'Arthur',
    idade:4,
}
console.log(calcularIdade.call(pessoa3,35));
console.log(calcularIdade.apply(pessoa2,[25]));