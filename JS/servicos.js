// Lista de produtos para simular os dados
const produtos = [
    { id: 1, nome: "Armário de Cozinha", descricao: "Armário moderno e espaçoso.", preco: 500.00, imagem: "https://via.placeholder.com/150" },
    { id: 2, nome: "Fogão 4 bocas", descricao: "Fogão eficiente e compacto.", preco: 800.00, imagem: "https://via.placeholder.com/150" },
    { id: 3, nome: "Guarda-Roupa 3 portas", descricao: "Guarda-roupa com amplo espaço interno.", preco: 1200.00, imagem: "https://via.placeholder.com/150" },
    { id: 4, nome: "Cama de Casal", descricao: "Cama confortável e resistente.", preco: 1000.00, imagem: "https://via.placeholder.com/150" },
    { id: 5, nome: "Mesa de Jantar 6 cadeiras", descricao: "Mesa elegante para sua sala de jantar.", preco: 1500.00, imagem: "https://via.placeholder.com/150" }
];

// Manipula o evento de envio do formulário de busca
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário
    const query = document.querySelector("input[name='q']").value.toLowerCase(); // Obtém o valor da busca
    const resultados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(query) || produto.descricao.toLowerCase().includes(query)
    );

    exibirResultados(resultados);
});

// Sugestão de produtos enquanto o usuário digita
document.querySelector("input[name='q']").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const resultados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(query) || produto.descricao.toLowerCase().includes(query)
    );

    exibirSugestoes(resultados);
});

// Função para exibir os resultados da busca
function exibirResultados(resultados) {
    const resultadosContainer = document.getElementById("searchResults");
    resultadosContainer.innerHTML = ""; // Limpa os resultados anteriores

    if (resultados.length === 0) {
        resultadosContainer.innerHTML = "<p>Nenhum produto encontrado.</p>";
        return;
    }

    resultados.forEach(produto => {
        const item = document.createElement("div");
        item.classList.add("resultado-item");
        item.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p><strong>${produto.preco}</strong></p>
        `;
        resultadosContainer.appendChild(item);
    });
}

// Função para exibir sugestões de produtos
function exibirSugestoes(resultados) {
    const resultadosContainer = document.getElementById("searchResults");
    resultadosContainer.innerHTML = ""; // Limpa os resultados anteriores

    if (resultados.length === 0) {
        resultadosContainer.innerHTML = "<p>Nenhum produto encontrado.</p>";
        return;
    }

    resultados.forEach(produto => {
        const item = document.createElement("div");
        item.classList.add("resultado-item");
        item.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <button onclick="exibirDetalhes(${produto.id})">Ver Detalhes</button>
        `;
        resultadosContainer.appendChild(item);
    });
}

// Função para redirecionar para a página de detalhes do produto
function exibirDetalhes(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    if (produto) {
        // Salva os detalhes do produto no localStorage para usar na página de detalhes
        localStorage.setItem("produtoSelecionado", JSON.stringify(produto));
        window.location.href = "detalhes.html"; // Redireciona para a página de detalhes
    }
}