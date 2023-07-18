const items = [
  {
    id: 0,
    img: "images/produto-1.png",
    title: "Brinco Semijoia Banhada com Micro Zircônia",
    price: "45,00",
    quantidade: 0,
  },
  {
    id: 1,
    img: "images/produto-2.png",
    title: "Pulseira Semijoia Banhada com Micro Zircônia",
    price: "56,00",
    quantidade: 0,
  },
  {
    id: 2,
    img: "images/produto-3.png",
    title: "Brinco Borboleta Infantil Antialérgico",
    price: "39,00",
    quantidade: 0,
  },
  {
    id: 3,
    img: "images/produto-4.png",
    title: "Colar Prata Semijoia Banhada com Micro Zircônia",
    price: "68,00",
    quantidade: 0,
  },
  {
    id: 4,
    img: "images/produto-5.png",
    title: "Colar Dourado Semijoia Banhada com Micro Zircônia",
    price: "87,00",
    quantidade: 0,
  },
  {
    id: 5,
    img: "images/produto-6.png",
    title: "Brinco Infantil Kello Kitty Antialérgico",
    price: "49,90",
    quantidade: 0,
  },
  {
    id: 6,
    img: "images/produto-7.png",
    title: "Brinco Argola Semijoia Banhada",
    price: "69,90",
    quantidade: 0,
  },
  {
    id: 7,
    img: "images/produto-8.png",
    title: "Brinco Infantil Joaninha Antialérgico",
    price: "45,90",
    quantidade: 0,
  },
];


function inicializarLoja() {
  var containerProdutos = document.getElementById("products");
  items.map((val) => {
    containerProdutos.innerHTML +=
      `
    
    <div class="card-produto id="card">
      <img src="` +
      val.img +
      `" alt>
        <div>
          <h3 class="heading-16" id="card-title">` +
      val.title +
      `</h3>
        </div>
        <div>
          <h3 class="heading-18 w-700">R$ ` +
      val.price +
      `</h3>
        </div>
          <a id="btn" class="btn-default heading-20 w-700" key="` +
      val.id +
      `" href="#">Comprar Agora</a>
    </div>
                
    `;
  });
}

inicializarLoja();

function atualizarCarrinho() {
  var containerCarrinho = document.getElementById("cart");
  containerCarrinho.innerHTML = " ";
  
  items.map((val) => {
    if (val.quantidade > 0) {
      var total = parseFloat(val.price) * val.quantidade;

      containerCarrinho.innerHTML += `
      <div class="cart-box">
        <tbody>
            <tr>
                <td>
                    <img width="100" src="${val.img}" alt>
                </td>
                <td>
                <h3 class="heading-16">${val.title}</h3>
                    <div class="mobile-cart-content">
                        <div class="col">
                            <div class="qty-box">
                            <button onclick="decreaseQuantity(${val.id})">
                        <img src="images/menos.png" alt="-">
                      </button>
                                <h2 class="heading-16">${val.quantidade}</h2>
                                <button onclick="increaseQuantity(${val.id})">
                        <img src="images/mais.png" alt="+">
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <h2 class="heading-16 w-700">R$ ${parseFloat(
                      val.price
                    ).toFixed(2)}</h2>
                </td>
                <td>
                    <h2 id="total"class="heading-16 w-700">R$ ${total.toFixed(
                      2
                    )}</h2>
                </td>
            </tr>
        </tbody>
      </div> 
    `;
    }
  });
}

// Função aumentar e dimunir quantidade de itens no carrinho
function decreaseQuantity(itemID) {
  
  var item = items.find((val) => val.id === itemID); 

  if (item) {
    item.quantidade -= 1;

    atualizarCarrinho();
  }
}

function increaseQuantity(itemID) {

  var item = items.find((val) => val.id === itemID);
  
  if (item) {
    item.quantidade += 1;

    atualizarCarrinho();
  }
}

// Não está inserindo no html, verificar

function atualizarTotalFinal() {
  var containerTotalFinal = document.getElementById("total");
  containerTotalFinal.innerHTML += `
      <div class="table-responsive-md">
          <table class="table cart-table ">
              <tfoot>
                  <tr>
                      <td class="heading-18 color-gold">Total:</td>
                      <td>
                          <h2 class="heading-24 w-700 color-gold">R$1000,00</h2>
                      </td>
                  </tr>
              </tfoot>
          </table>
      </div>
    `;
}

var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (event) {
    event.preventDefault();

    let key = this.getAttribute("key");
    items[key].quantidade++;
    atualizarCarrinho();

    var containerCarrinho = document.getElementById("cart");
    containerCarrinho.scrollIntoView({ behavior: "smooth" });

    //Colocar o valor em reais 50,00 (transformar em number na soma);
  });
}

//Função para filtrar/////////////////////////////////////////////////////////////////
const cards = document.getElementsByClassName('card-produto');

const filterElement = document.getElementById('input-filter');

filterElement.addEventListener('input', filtrar);

function filtrar() {
  const filterText = filterElement.value.toLowerCase();
  if (filterText !== '') {
    for (let card of cards) {
      const title = card.querySelector('.heading-16');
      const cardTitle = title.textContent.toLowerCase();

      if (!cardTitle.includes(filterText)) {
        card.style.display = 'none';
      } else {
        card.style.display = 'block';
      }
    }
  } else {
    for (let card of cards) {
      card.style.display = 'block';
    }
  }
}

//////////////////////////////////////////////////////////////////////////////////////

// O que ainda falta:

// Terminar o tatalFinal() - Falta terminar, não está funcionando
// Ter a opção de excluir os produtos do carrinho;
// Incluir campo de busca e filtrar dentro do array de procutos e mostrar o resultado; - Gabriel / Jéssica
// Guardar os dados da compra no localStorage;
