//Posição   0       1   2
arrays = ['Pedro', 51, true] // Usamos quando queremos fazer listas de algo
objeto = {} // Usamos quando queremos agrupar informação de algo

console.log(arrays[2]);

arrays[2] = false;
console.log(arrays[2]);

arrays.push(['MB', 'B', 'R', 'I'])
console.log(arrays[3][1])

aluno = {
    nome: 'Eliel',
    ra: '24',
    chave: 'valor'
}

console.log(aluno.nome)
console.log(aluno['ra'])

listaAlunos = ['Adrian', 'Vinicius', 'Cleiton']
listaAlunosObj = [
    {nome: 'Adrian', ra: 12, notas: ['I', 'I', 'MB'] },
    {nome: 'Vinicius', ra: 51, notas: ['MB', 'B', 'I'] },
    {nome: 'Cleiton', ra: 15, notas: ['MB', 'MB', 'MB'] },
]

console.log(listaAlunosObj[2]['notas'][0])

for(let aluno of listaAlunosObj){
    console.log('RA:', aluno['ra']);

    for(let nota of aluno['notas']){
        console.log('   ->Nota:', nota)
    }
}

for(let aluno of listaAlunos){
    console.log('Nome: ', aluno)
}