import { Produto } from "../src/model/Produto"

export interface MercadoRepository {


    // CRUD DO MERCADO
    ListartodososProdutos(): void
    ListarProdutopeloID (id : number): void
    CadastrarProduto(produto:Produto):void
    AtualizarProduto(Produto:Produto):void
    DeletarProduto(id:number):void

}