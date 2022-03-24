const alunos = [
    {
        nome:'Marian',
        nota:'5',
        turma:'1B',
    },
    {
        nome:'Jéssica',
        nota:'8.9',
        turma:'2C',

    },
    {
        nome:'Joseph',
        nota:'7',
        turma:'1B',
    },
    {
        nome:'jhon',
        nota:'6.3',
        turma:'1C',
    }

];
function alunosAprovados(alunos,média){

    let aprovados =[];

    for (let i= 0; i< alunos.length;i++){
        let{nota,nome} = alunos[i];
        
        if (nota >= média){
            aprovados.push(nome);
        }

    }
    return aprovados;
}
console.log(alunosAprovados(alunos,5));
