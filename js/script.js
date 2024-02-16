
function dados(){
    let livros = Number(prompt("Digite a quantidade de livros que deseja comprar: "));
        return livros
}

function calcular(livros){
    if (livros >= 7){
        valor = livros * 15
        console.log(valores)
    }
    else if(livros < 7){
        valor = livros * 22
        console.log(valores)
    }
    else{}

}

function main(){
    let qLivros = dados()
    let qValores = calcular(qLivros)
    console.log(qValores)
}
main()