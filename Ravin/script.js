function pegarItens() {
    const url = `https://64b72058df0839c97e166b97.mockapi.io/ravin/ravin`;
    fetch(url)
        .then((dados) => {
            return dados.json();
        })
        .then((data) => {
            localStorage.setItem("cardapio", JSON.stringify(data))
            montarMenu(data);
        });
}

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
                <p class="product-price">Preço: ${valor.toFixed(2).replace(".", ",")} R$</p>
                <div class="product-quantity-btn">
                    <input type="number" id="quantity-${id}" name="quantity" min="1" max="10" value="1">
                    <button id="${id}" type="button" onclick="addProduct(${id})">Adicionar ao Pedido</button>
                </div>
                </div>
            </div>
        `;
        })
        divProdutos.innerHTML += textHtml;
    })
}

const addProduct = (id) => {
    const menu = localStorage.getItem("cardapio");
    const product = JSON.parse(menu).find((itemMenu) => itemMenu.id === id);
    const quantity = document.getElementById(`quantity-${product.id}`).value
    const oldList = JSON.parse(localStorage.getItem("listaDePedidos"))
    if (oldList) localStorage.setItem("listaDePedidos", JSON.stringify([... oldList, {...product, quantity}]))
    else localStorage.setItem("listaDePedidos", JSON.stringify([{...product, quantity}]))
}


document.addEventListener("DOMContentLoaded", () => {
    // Call the pegarItens function to fetch and display the products
    pegarItens();
});




