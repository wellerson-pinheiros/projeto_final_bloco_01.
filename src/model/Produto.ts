export class Produto {

    // atributos privados da minha Classe
    private _nome: string;
    private _id: number;
    private _tipo: number;
    private _preco: number;

    // metodo construtor
	constructor(nome: string, id: number, tipo: number, preco: number) {
		this._nome = nome;
		this._id = id;
		this._tipo = tipo;
		this._preco = preco;
	}

    // metodos get e set
    
	public get nome(): string {
		return this._nome;
	}

   
	public get id(): number {
		return this._id;
	}

	public get tipo(): number {
		return this._tipo;
	}

    
	public get preco(): number {
		return this._preco;
	}

    
	public set nome(value: string) {
		this._nome = value;
	}

   
	public set id(value: number) {
		this._id = value;
	}

   
	public set tipo(value: number) {
		this._tipo = value;
	}

   
	public set preco(value: number) {
		this._preco = value;
	}

	public visualizar(){

		console.log('Nome do produto ' + this._nome);
		console.log('O id do produto : ' + this.id);
		console.log('o tipo do produto ' + this._tipo);
		console.log('O preco do produto ' + this._preco.toFixed(2));
	}
		
}