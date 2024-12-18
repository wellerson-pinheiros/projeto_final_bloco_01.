import { question } from "readline-sync"
import { Comidas } from "./src/model/Comidas"
import { Produto } from "./src/model/Produto"
import { ControllerMercado } from "./controller/ControllerMercado"
import { Cosmetico } from "./src/model/cosmetico"

const readlinesync = require('readline-sync')



export function main (){
 
    let opcao,id,tipo,preco,peso : number
    let nome,validade,fragancia,bebida : string
    let tipos =  [ 'Comida', 'Cosmetico', 'Bebidas' ]

    // instanciar objetos da minha classe controle
    const produtosInstanciados = new ControllerMercado

    while (true){

       

            console.log("****************************************")
            console.log(" Bem vindo ao Mercado da Familia online" )
            console.log("****************************************")
            console.log("   Escolha as opçoes disponiveis       ")
            console.log("***************************************")
            console.log("       1 - Cadastrar Produto           ")
            console.log("       2 - Listar todos os produtos    ")
            console.log("       3 - Consultar Produto por Id    ")
            console.log("       4 - Atualizar Produto()         ")
            console.log("       5 - Deletar Produto()           ")
            console.log("       0 - Finalizar programa          ")        
            console.log('***************************************')
            console.log('ESCOLHA A OPCAO DESEJADA : '            )

            opcao = readlinesync.questionInt('')

            if(opcao < 0 || opcao > 5){
                console.log('erro')
                sobre()
                
            }else if (opcao === 0){
                   console.log("Obrigado pela preferencia")
                   sobre() 
                   process.exit()
            }
       
        switch(opcao) {
            case 1:
                if (opcao === 1){

                    nome = readlinesync.question('Qual o nome do produto?')
                    
                    tipo = readlinesync.keyInSelect(tipos,"",{
                        cancel:false,
                    }) + 1

                    preco = readlinesync.questionFloat('Digite o preco')                        
                
                    switch(tipo) {
                        case 1:
                            validade = readlinesync.question('digite a validade do produto');
                            produtosInstanciados.CadastrarProduto(new Comidas(nome,produtosInstanciados.geraId(),tipo,preco,validade))
                            break;
                        case 2:
                            fragancia = readlinesync.question('Quala a fragancia do produto')
                            produtosInstanciados.CadastrarProduto(new Cosmetico(nome,produtosInstanciados.geraId(),tipo,preco,fragancia))  
                            break;  
                            /*
                        case 3:
                            bebida = readlinesync.question('Qual o sabor da bebida?')
                            produtosInstanciados.CadastrarProduto(new bebida())
                              */  
                            }
                
                }
                break;
            case 2:
                
                    console.log('Todos os produtos cadastrados ate o momento')
                    produtosInstanciados.ListartodososProdutos()
                   
                break;
            case 3:
                
                    console.log('Consultar produto por id');
                    id = readlinesync.questionInt('Digite o id : ');
                    produtosInstanciados.ListarProdutopeloID(id)
                   
            
                break;
            case 4:
                    console.log('Digite o produto que voce quer atualizar')
                    id = readlinesync.questionInt('Digite o id para procurarmos no sistema')
                    // verificar se o produto existe
                     let produto = produtosInstanciados.buscarNoArray(id)

                     if (produto !== null) {
                        nome = readlinesync.question('digite o nome do produto : ')
                        tipo = produto.tipo

                        preco = readlinesync.questionFloat('Qual o preço?')

                        switch(tipo){
                            case 1: 
                            validade = readlinesync('Digite a validade')
                            produtosInstanciados.AtualizarProduto(new Comidas(nome,id,tipo,preco,validade))
                            break;

                        
                            case 2:
                                fragancia = readlinesync.question('Qual a nova fragancia?')

                                produtosInstanciados.AtualizarProduto(new Cosmetico(nome,id,tipo,preco,fragancia))
                                break
                        }
                        }else{
                            console.log('produto nao encontrado')
                     }

                break;
            }
        
    }
       
}

main()
function sobre (){

console.log('Programa Mercado criado 18/12/2024')
console.log('Criado por Wellerson pinheiros dos santos')
console.log('Obrigado!')
}

function visualizar() {
    throw new Error("Function not implemented.")
}
