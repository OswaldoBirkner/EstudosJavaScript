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
    let divProdutos = document.getElementById("pratosSalgados");
    let textHtml = "";
    for (const itemMenu of itensMenu) {
        textHtml += `
            <div class="product-container">
                 <img src="${itemMenu.Imagem}" class="product-image" alt="${itemMenu.Produto}">
                <div class= "container-description"><h3 class="product-title">${itemMenu.Produto}</h3>
                <p class="product-description">${itemMenu.Descricao}</p>
                <p class="product-price">Preço: ${itemMenu.Preco}</p>
                <div class="product-quantity-btn">
                    <input type="number" id="quantidadeAlmondega" name="quantity" min="1" max="10" value="1">
                    <button id="addButtonAlmondega" type="button">Adicionar ao Pedido</button>
                </div>
                </div>
            </div>
        `;
    }
    divProdutos.innerHTML += textHtml;
}


document.addEventListener("DOMContentLoaded", () => {
    // Call the pegarItens function to fetch and display the products
    pegarItens();
});




