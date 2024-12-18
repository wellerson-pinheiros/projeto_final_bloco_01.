
import { Produto } from "./Produto";

export class Comidas extends Produto {

    private _validade: string;


    constructor(

        nome: string, id: number, tipo: number, preco: number, validade : string
    ){

        super(nome , id , tipo , preco)
        this._validade = validade;

    }

    
	public get validade(): string {
		return this._validade;
	}

   
	public set validade(value: string) {
		this._validade = value;
	}
    
    public visualizar(): void {
        super.visualizar();
        console.log('A validade do produto é ' + this._validade)
    }

}