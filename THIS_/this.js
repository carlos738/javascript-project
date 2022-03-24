function calcularIdade(anos){
return `Daqui a ${anos} anos, ${this.nome} terá ${
this.idade + anos
} anos de idade.`;

}

const pessoa1 ={
    nome:'Aurélia',
    idade: 18,
};
const pessoa2 ={
    nome:'Tomoko',
    idade:14,
};
const pessoa3={
    nome:'Justine',
    idade:26,
};
console.log(calcularIdade.call(pessoa3,19));
console.log(calcularIdade.apply(pessoa3,[18]));