import { MercadoRepository } from "../repository/MercadoRepository";
import { Produto } from "../src/model/Produto";

export class ControllerMercado implements MercadoRepository{

    listaProdutos = new Array<Produto>();
    
    public id : number = 0;

    ListartodososProdutos(): void {
        this.listaProdutos.forEach(produto => produto.visualizar());
    }
    ListarProdutopeloID(id: number): void {
        let buscarProdutoPorId = this.buscarNoArray(id);
        if(buscarProdutoPorId != null){
            buscarProdutoPorId.visualizar();
        }else{
            console.log('Erro produto nao localizado')
        }
            
       
    }
    CadastrarProduto(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log('Produto cadastrado com exito');
    }

    AtualizarProduto(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if(buscaProduto != null){
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log('produto com o id: ' + produto.id + " foi atualizado com sucesso !")
        }else{
            console.log('Produto com o id: ' + produto.id + " Nao foi encontrado ")
        }
    }
    DeletarProduto(id: number): void {
       let buscaproduto = this.buscarNoArray(id);
       if (buscaproduto != null) {
        this.listaProdutos.slice(this.listaProdutos.indexOf(buscaproduto), 1);
        console.log('O produto com id' + id + "foi apagado com sucesso!" )
       }else{
            console.log('Produto não encontrado')
       }
    }
    

    // metodos auxiares

    // gerar id

    public geraId(): number{
        return ++this.id;
    }
	

    public buscarNoArray (id:number) : Produto | null {

        for (let produto of this.listaProdutos){
            if( produto.id === id){
                return produto;
            }
        }

        return null
    }

}