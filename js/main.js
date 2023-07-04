const items = [
  {
    id: 0,
    img: "images/produto-1.png",
    title: "Brinco Semijoia Banhada com Micro Zircônia",
    price: '45,00',
    quantidade: 0,
  },
  {
    id: 1,
    img: "images/produto-2.png",
    title: "Pulseira Semijoia Banhada com Micro Zircônia",
    price: '56,00',
    quantidade: 0,
  },
  {
    id: 2,
    img: "images/produto-3.png",
    title: "Brinco Borboleta Infantil Antialérgico",
    price: '39,00',
    quantidade: 0,
  },
  {
    id: 3,
    img: "images/produto-4.png",
    title: "Colar Prata Semijoia Banhada com Micro Zircônia",
    price: '68,00',
    quantidade: 0,
  },
  {
    id: 4,
    img: "images/produto-5.png",
    title: "Colar Dourado Semijoia Banhada com Micro Zircônia",
    price: '87,00',
    quantidade: 0,
  },
  {
    id: 5,
    img: "images/produto-6.png",
    title: "Brinco Infantil Kello Kitty Antialérgico",
    price: '49,90',
    quantidade: 0,
  },
  {
    id: 6,
    img: "images/produto-7.png",
    title: "Brinco Argola Semijoia Banhada",
    price: '69,90',
    quantidade: 0,
  },
  {
    id: 7,
    img: "images/produto-8.png",
    title: "Brinco Infantil Joaninha Antialérgico",
    price: '45,90',
    quantidade: 0,
  }
];

function inicializarLoja() {
  var containerProdutos = document.getElementById("products");
  items.map((val) => {
    containerProdutos.innerHTML += `
    
    <div class="card-produto">
      <img src="`+val.img+`" alt>
        <div>
          <h3 class="heading-16">`+val.title+`</h3>
        </div>
        <div>
          <h3 class="heading-18 w-700">R$ `+val.price+`</h3>
        </div>
          <a id="btn" class="btn-default heading-20 w-700" key="`+val.id+`" href="#">Comprar Agora</a>
    </div>
                
    `;
  })
}

inicializarLoja()

function atualizarCarrinho() {
  var containerCarrinho = document.getElementById("cart");
  containerCarrinho.innerHTML= " ";
  items.map((val) => {
    if(val.quantidade > 0) {
    containerCarrinho.innerHTML += 
    
    `
      <div class="cart-box">
        <tbody>
            <tr>
                <td>
                    <img width="100" src="`+val.img+`" alt>
                </td>
                <td><h3 class="heading-16" href="#">`+val.title+`</h3>
                    <div class="mobile-cart-content">
                        <div class="col">
                            <div class="qty-box">
                                <h2 class="heading-16">`+val.quantidade+`</h2>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <h2 class="heading-16 w-700">R$ `+val.price+`</h2>
                </td>
                <td>
                    <h2 id="total"class="heading-16 w-700">R$ `+val.price+`</h2>
                </td>
            </tr>
        </tbody>
      </div> 
    `;
    }
  });
}


var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    event.preventDefault();

    let key = this.getAttribute('key');
    items[key].quantidade++;
    atualizarCarrinho();

    // Atualizar o valor;
    //Colocar o valor em reais 50,00 (transformar em number na soma);

  })

}


// O que ainda falta:

// Quando adicionado o produto, dar scroll para o carrinho abaixo;
// Calcular o total de todos os produtos;
// Forma de pagamento - verificar como usar o link do pagueseguro;
// Guardar os dados da compra no localStorage;
// Fazer o footer (colocar logotipo);
// Colocar os links do header.

