class ContaBancaria{
    constructor (agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(novoSaldo){
        this._saldo = novoSaldo;
    }

    sacar(valor){
        if (valor > this._saldo){
            return "Operação negada. Saldo insuficiente"
        }
        this._saldo -= valor;
        return "saldo atual:" + this._saldo;
    }
    
    depositar(valor){
        this._saldo += valor;
        return "saldo atual:" + this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = "corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(novoCartao){
        this._cartaoCredito = novoCartao;
    }
}

class ContaPolpanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "polpança";
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "universitaria";
    }

    sacar (valor){
        if (valor <= 500){
            this._saldo -= valor;
        }
        else {
            console.log("Valor acima do limite permitido")
        }
    }
}

let conta1 = new ContaPolpanca(1, 1234)
