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
  let containerProdutos = document.getElementById("products");
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
  const _carrinhoInicializador = [
    {
      id: null,
      img: null,
      title: null,
      price: null,
      quantidade: null,
    },
  ];

  const carrinho = JSON.parse(
    localStorage.getItem("carrinho") || JSON.stringify(_carrinhoInicializador)
  );
  let containerCarrinho = document.getElementById("cart");
  containerCarrinho.innerHTML = " ";

  const carrinhoArray = [];

  carrinho.map((val) => {
    if (val.quantidade > 0) {
      let total = parseFloat(val.price) * val.quantidade;

      carrinhoArray.push(val);
      localStorage.setItem("carrinho", JSON.stringify(carrinhoArray));

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
  //Valor total do carrinho
  let totalCarrinho = 0;
  items.map((val) => {
    if (val.quantidade > 0) {
      let total = parseFloat(val.price) * val.quantidade;

      containerCarrinho.innerHTML += `
      <div class="cart-box">
        <!-- Conteúdo do item -->
      </div>
    `;
      totalCarrinho += total;
    }
  });

  let spanTotalCarrinho = document.getElementById("totalCarrinho");
  spanTotalCarrinho.innerHTML = `Total do Carrinho: R$ ${totalCarrinho.toFixed(
    2
  )}`;
}

inicializarLoja();

function atualizarCarrinho() {
  let containerCarrinho = document.getElementById("cart");
  containerCarrinho.innerHTML = " ";

  const carrinhoArray = [];

  items.map((val) => {
    if (val.quantidade > 0) {
      let total = parseFloat(val.price) * val.quantidade;

      carrinhoArray.push(val);
      localStorage.setItem("carrinho", JSON.stringify(carrinhoArray));

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
                                      <h2 class="heading-16">${
                                        val.quantidade
                                      }</h2>
                                      <button onclick="increaseQuantity(${
                                        val.id
                                      })">
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

  // Valor total do carrinho
  let totalCarrinho = 0;
  items.map((val) => {
    if (val.quantidade > 0) {
      let total = parseFloat(val.price) * val.quantidade;

      containerCarrinho.innerHTML += `
      <div class="cart-box">
        <!-- Conteúdo do item -->
      </div>
    `;
      totalCarrinho += total;
    }
  });

  let spanTotalCarrinho = document.getElementById("totalCarrinho");
  spanTotalCarrinho.innerHTML = `Total do Carrinho: R$ ${totalCarrinho.toFixed(
    2
  )}`;
}

let links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (event) {
    event.preventDefault();

    let key = this.getAttribute("key");
    items[key].quantidade++;
    atualizarCarrinho();

    let containerCarrinho = document.getElementById("cart");
    containerCarrinho.scrollIntoView({ behavior: "smooth" });
  });
}

// Função aumentar e dimunir quantidade de itens no carrinho
function decreaseQuantity(itemID) {
  let item = items.find((val) => val.id === itemID);

  if (!item) return;

  let local = JSON.parse(localStorage.getItem("carrinho"));
  let index = local.findIndex((_filter) => _filter.id === item.id);
  if (--item.quantidade <= 0) local.splice(index, 1);
  else --local[index].quantidade;

  localStorage.setItem("carrinho", JSON.stringify(local));

  atualizarCarrinho();
}

function increaseQuantity(itemID) {
  var item = items.find((val) => val.id === itemID);

  if (item) {
    item.quantidade += 1;

    atualizarCarrinho();
  }
}

// Função de esvaziar o carrinho

function esvaziarCarrinho() {
  items.forEach((item) => {
    item.quantidade = 0;
  });

  atualizarCarrinho();
}

//Função para filtrar

const cards = document.getElementsByClassName("card-produto");
const filterElement = document.getElementById("input-filter");

filterElement.addEventListener("input", filtrar);

function filtrar() {
  const filterText = filterElement.value.toLowerCase();
  if (filterText !== "") {
    for (let card of cards) {
      const title = card.querySelector(".heading-16");
      const cardTitle = title.textContent.toLowerCase();

      if (!cardTitle.includes(filterText)) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    }
  } else {
    for (let card of cards) {
      card.style.display = "block";
    }
  }
}

// Biblioteca de avisos sweetalert
const btn = document.querySelector("#btnSuccess");

btn.addEventListener("click", () => {
  Swal.fire({
    title: "Compra finalizada!",
    text: "Obrigada pela preferência",
    icon: "success",
    confirmButtonText: " OK ",
  });
});

// Consumo de API
const produtosFake = document.querySelector(".fake");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((product) => {
      const itemList = document.createElement("li");

      itemList.innerHTML = `
        <div class="card-produto conheca">
            <img class="conheca" src="${product.image}" alt="Imagem do produto">
            <h3 class="heading-16">${product.title}</h3>
            <p class="heading-18 w-700">R$ ${product.price}</p>
            <a id="btn" class="btn-default heading-20 w-700">Conheça</a>
        </div>
                    
            `;

      produtosFake.appendChild(itemList);
    });
  })

  .catch((error) => console.log("Oops!, não estamos encontrando os produtos."));
