function calculaIdade(anos){
    return `Daqui a ${anos} anos,${this.nome} terá ${
        this.idade + anos
    } anos de idade. `;
}

const pessoa1 ={
    nome: 'Amelia',
    idade: 23,
};
const pessoa2 ={
    nome:'Márcia',
    idade: 17,
};
const pessoa3 ={
    nome:'jonas',
    idade: 13,
};
//console.log(calculaIdade.call(pessoa1,23));
console.log(calculaIdade.apply(pessoa2,[23]));