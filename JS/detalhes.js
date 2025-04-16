// Obtém os detalhes do produto do localStorage
const produto = JSON.parse(localStorage.getItem("produtoSelecionado"));

if (produto) {
    const container = document.getElementById("produtoDetalhes");

    // Calcula os valores de pagamento
    const valorAVista = (produto.preco * 0.9).toFixed(2); // 10% de desconto
    const valorParcelado = (produto.preco / 8).toFixed(2); // Dividido em 8 parcelas

    container.innerHTML = `
        <div class="produto-detalhes">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>${produto.descricao}</p>
            <p><strong>Preço: R$ ${produto.preco.toFixed(2)}</strong></p>
            <h3>Formas de Pagamento</h3>
            <ul>
                <li>À vista ou PIX: <strong>R$ ${valorAVista}</strong></li>
                <li>Parcelado em até 8x: <strong>8x de R$ ${valorParcelado}</strong></li>
            </ul>
        </div>
    `;
} else {
    document.getElementById("produtoDetalhes").innerHTML = "<p>Produto não encontrado.</p>";
}