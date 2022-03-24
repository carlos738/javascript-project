const alunos =[
    {
        nome: 'Maria',
		nota: 5,
		turma: '1B',
	
    },
    {
        nome: 'Jonas',
		nota: 9,
		turma: '1B',
	  
    },
    {
        nome: 'Carlos',
		nota: 9,
		turma: '2C',
	
    },
    {
        nome: 'Julia',
		nota: 7,
		turma: '1B',
	
    },
    {
        nome: 'kesia',
		nota: 4,
		turma: '1B',
	
    },
];
function alunosAprovados(alunos,média){
    let aprovados = [];
    for(let i =0; i < alunos.length;i++){
       let {nota, nome} =  alunos[i];
       if (nota>= média){
           aprovados.push(nome);
       }
    }
    return aprovados;
}
console.log(alunosAprovados(alunos,5));