interface IPessoaEx {
    nome: string;
    sobrenome: string;
    validarDados(x:string): boolean;
};

class ContaCorrente {
    correntista: IPessoaEx;
    saldo: number;
    
	adicionarCorrentistaPF(correntista: IPessoaEx): void {
		this.correntista = correntista;
    };
    
	adicionarCorrentistaPJ(correntista: IPessoaEx): void{
    }
    
	imprimirDadosPF(): string {
        var a;
        return a;
    };
    
	imprimirDadosPJ(): string {
        var a;
        return a;
    };
};

class IPessoaFisicaEx implements IPessoaEx{
    nome: string;
    sobrenome: string;
    cpf: string;
    constructor(nome:string, sobrenome:string, cpf: string){
        this.nome      = nome;
        this.sobrenome = sobrenome;
        this.cpf       = cpf;
    }
    validarDados(){
        return true;
    }
}
class IPessoaJuridicaEx implements IPessoaEx{
    nome: string;
    sobrenome: string;
    cnpj: string;
    credito:string;
    constructor(nome:string, sobrenome:string, cnpj:string, credito:string){
        this.nome      = nome;
        this.sobrenome = sobrenome;
        this.cnpj      = cnpj;
        this.credito   = credito;
    }
    validarDados(){
        return true;
    }
    validarCNPJ(): boolean {
        return true;
    }
}
    let clientePF = new IPessoaFisicaEx('Patrick', 'Daleprane', '170095xxxx');
    let conta = new ContaCorrente();
    let clientePJ = new IPessoaJuridicaEx('Patrick', 'Daleprane', 'cnpj', '3000');
    let contaPJ = new ContaCorrente();

