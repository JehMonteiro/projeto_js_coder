/* 

O que precisa ser feito:

 Página index.html quando clicado em "Comprar Agora", precisa direcionar para a página de checkout e la conter os itens adicionados;

 Página checkout.html = 
 1) Carregar a imagem do produto;
 2) Carregar o nome do produto;
 3) Carregar o preço do produto;
 4) Fazer a função de soma e subtração da quantidade;
 5) Calcular o total de cada produto;
 6) Calcular o total de todos os produtos;
 7) Quando clicado em "Compre Agora" pensar em alguma ação de pagamento ou apenas dizer que o cliente vai receber o link de pagamento.

*/

/* IDs de HTML selecionados */
let imagem = document.querySelectorAll("image");
let produto = document.querySelectorAll("product");
let preco = document.querySelectorAll("price").value;
let quantidade = document.querySelectorAll("qtd").value;
let total = document.getElementById("total").valeu;

var somando;
var subtraindo;
var resultado;

/*Função global */
function comprar(event) {

  function soma(value) {
    //   soma = qtd * preco;
    somando = document.querySelectorAll("qtd").value * document.querySelectorAll("price");
  }

  function subtrai(value) {
    //   subtracao = qtd * preco - preco;
    subtraindo = somando - document.querySelectorAll("price");
  }
  
}
