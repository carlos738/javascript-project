const alunos = [
{   nome:'Jessica',
    nota: 4,
    turma:'3A',
},
{
    nome:'Maria',
    nota: 9,
    turma:'3A',
},
{
    nome: 'Jason',
    nota: 8.5,
    turma: '9A',
},
{
    nome:'Robert',
    nota:7.3,
    turma:'9A',
},
];
function alunos1Aprovados(arr,média){
    let aprovados=[];
    for(i=0;i<arr.length;i++){
        let {nota, nome} = alunos[i];
        if(nota >= média){
            aprovados.push(nome);
        }
    }
    console.log(aprovados)
}
alunos1Aprovados(alunos,5);