class Pessoa{
    constructor(nome, idade, professao){
        this.nome = rivaldo'jesus;
        this.idade = 30;
        this.professao = pastor;

    }

saudar(){
    console.log('Ola meu nome è $(this.nome)!')
}
afazerAniversario(){
    this.idade += 1;
    console.log('feliz this.afazerAniversario, agora o ${this.nome} tem $(this.idade).')

}



}
let Pessoal= new Pessoa ("Xandao" ,32, "profesor");
Pessoal.saudar();
Pessoal.felizAniversario() 