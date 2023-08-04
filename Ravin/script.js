function pegarItens() {
    const url = `https://64b72058df0839c97e166b97.mockapi.io/ravin/ravin`;
    fetch(url)
        .then((dados) => {
            return dados.json();
        })
        .then((data) => {
            montarMenu(data);
        });
}

// const dataMock = [{
//     "id": 1,
//     "categoria": "pratos salgados",
//     "nome": "Hambúrguer gourmet",
//     "imagem": "url_da_imagem1.jpg",
//     "descricao": "Delicioso hambúrguer gourmet com carne suculenta, queijo derretido e vegetais frescos.",
//     "valor": 20.50
//   },{
//     "id": 11,
//     "categoria": "pratos doces",
//     "nome": "Cheesecake de frutas vermelhas",
//     "imagem": "url_da_imagem11.jpg",
//     "descricao": "Deliciosa cheesecake com cobertura de frutas vermelhas.",
//     "valor": 22.50
//   },{
//     "id": 21,
//     "categoria": "bebidas alcoolicas",
//     "nome": "Margarita",
//     "imagem": "url_da_imagem21.jpg",
//     "descricao": "Coquetel refrescante de tequila, licor de laranja e suco de limão.",
//     "valor": 16.50
//   },{
//     "id": 40,
//     "categoria": "bebidas não alcoolicas",
//     "nome": "Limão soda",
//     "imagem": "url_da_imagem40.jpg",
//     "descricao": "Bebida não alcoólica com sabor de limão.",
//     "valor": 4.00
//   }

// ]

// const pegarItens = () => montarMenu(dataMock);

function montarMenu(itensMenu) {
    const cardapio = ["pratosSalgados", "pratosDoces", "bebidasNãoAlcoolicas", "bebidasAlcoolicas"]
    cardapio.forEach((itemCardapio) => {
        let divProdutos = document.getElementById(itemCardapio);
        let textHtml = "";
        itensMenu.filter((item) => item.categoria.split(" ").join("").includes(itemCardapio.toLowerCase()))
        .map(({id, nome, imagem, descricao, valor}) => {
            return textHtml += `
            <div class="product-container" key="${id}">
                 <img src="${imagem}" class="product-image" alt="${nome}">
                <div class= "container-description"><h3 class="product-title">${nome}</h3>
                <p class="product-description">${descricao}</p>
                <p class="product-price">Preço: ${valor}</p>
                <div class="product-quantity-btn">
                    <input type="number" id="quantidadeAlmondega" name="quantity" min="1" max="10" value="1">
                    <button id="addButtonAlmondega" type="button">Adicionar ao Pedido</button>
                </div>
                </div>
            </div>
        `;
        })
        divProdutos.innerHTML += textHtml;
    })
}


document.addEventListener("DOMContentLoaded", () => {
    // Call the pegarItens function to fetch and display the products
    pegarItens();
});




