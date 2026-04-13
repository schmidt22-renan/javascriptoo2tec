class ContaBancaria {


    #saldo = 0

    constructor(titular){
        this.titular = titular;

    }

    depositar(valor){
        if (valor > 0){
            this.#saldo += valor;
            console.log(`deposito de ${valor} feito.`)

        }
    }
        sacar(valor){
            if (valor > 0 && valor >= this.#saldo){
                this.#saldo -= valor;
                console.log(`Saque de R$ ${valor} feito.`)  
            }else{
                console.log("Saldo insuficiente ou valor invalido.")
            }
            exibirSaldo(){
                return `Ola, seu saldo é ${this.#saldo}`
            }
            
        }
    }
const conta1 = new ContaBancaria("Zè lombra");
conta1.depositar(1000);
console.log(conta1.exibirSaldo())
conta1.depositar(1000);
console.log(conta1.exibirSaldo())
conta1.depositar(1000);
console.log(conta1.exibirSaldo())

