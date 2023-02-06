let situacao = prompt("você quer cadastrar uma nova peça' \n 1 -sim \n 2 -não");
let pReprovadas= "";
let pTotalAprovadas = 0;
let pTotalReprovadas = 0;
let pTotalPecas = 0;


while (situacao == "1"){
    let numeroPeca = prompt("Digite o codigo da peças");
    let situacaoPeca = prompt("Digite a situação da peça. \n  1-Aprovado \n 2-Reprovado");
    
    if (situacaoPeca == "2"){
        pReprovadas += numeroPeca + "</br>";
        pTotalReprovadas++
    }
    if(situacaoPeca == "1"){
        pTotalAprovadas++
    }   
    pTotalPecas = pTotalAprovadas + pTotalReprovadas;

    situacao = prompt("você quer cadastrar uma nova peça' \n 1 -sim \n 2 -não");
}
 
document.getElementById("totalReprovadas").innerHTML = pTotalReprovadas + "";
document.getElementById("Reprovadas").innerHTML = pReprovadas;
document.getElementById("totalAprovadas").innerHTML = pTotalAprovadas;
document.getElementById("totalPecas").innerHTML = pTotalPecas;
