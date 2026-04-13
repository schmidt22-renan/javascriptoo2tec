class Aluno {
    constructor(nome, matricula, notas){
    this.nome = nome;
this.matricula = matricula;
this.notas = notas;
    }
calculamedia(){
    let soma = 0;
    for (let i = 0; i < this.notas.length; i++) {
        soma += this.notas[i];

    }
    return soma / notas.length;
}


obterStatus(){
    const media = this.calculaMedia()

    if media(media > 7){
        return "Aprovado"
    } else if (media >= 5) {
        return "Recuperaçao"
    } else {
        return "Reprovado"
    }
    exibirRelatorio(){
        console.log("relatorio do aluno ${this.nome}")
    }

}

}
aluno1 = new Aluno("alevino", "curso t.i", [60, 30, 40,]);
console.log(aluno1.calculamedia()
let aluno1 = new Aluno('alevino', 850850, [7.2, 6.5, 3.3])
console.log(aluno1.calculaMedia());
console.log(aluno1.obterStatus());