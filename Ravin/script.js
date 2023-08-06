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




