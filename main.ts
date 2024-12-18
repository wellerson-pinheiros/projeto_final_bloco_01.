
const readlinesync = require('readline-sync')



export function main (){
 
    let opcao,id : number

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
       /*
        switch(opcao) {
            case 1:
                if (opcao === 1){

                }
                break;
            case 2:
                if (opcao === 2 ){

                }    
                break;
            case 3:
                if(opcao === 3 ){

                }    
            
                break;
            case 4:
                if( opcao === 4){

                }   
      
      
                break;
            }
        */
    }
       
}

main()
function sobre (){

console.log('Programa Mercado criado 18/12/2024')
console.log('Criado por Wellerson pinheiros dos santos')
console.log('Obrigado!')
}