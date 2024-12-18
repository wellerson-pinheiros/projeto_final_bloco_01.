import { Produto } from "./Produto";

export class Cosmetico extends Produto{
    
    private _fragancia : string;


	constructor(
        nome: string, id: number, tipo: number, preco: number, fagrancia : string
    ) {
	
        super(nome,id,tipo,preco)
        this._fragancia = fagrancia
    }

   
	public get fragancia(): string {
		return this._fragancia;
	}

    
	public set fragancia(value: string) {
		this._fragancia = value;
	}


	public visualizar(): void {
		super.visualizar()
		console.log('A fragancia do produto e ' + this._fragancia )
	}
}