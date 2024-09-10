const montanhasRussa = [
    {
        nome: "Kingda Ka",
        local: "Six Flags Great Adventure, EUA",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kingda_Ka.jpg/300px-Kingda_Ka.jpg",
        descricao: "A Kingda Ka é a montanha-russa mais alta do mundo, com 139 metros de altura."
    },
    {
        nome: "Steel Dragon 2000",
        local: "Nagashima Spa Land, Japão",
        imagem: "https://www.incrediblecoasters.com/steeldragon2000NS6.jpeg",
        descricao: "A mais longa montanha-russa do mundo, com mais de 2,4 km de extensão."
    },
    {
        nome: "Top Thrill Dragster",
        local: "Cedar Point, EUA",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Top_Thrill_Dragster_at_Cedar_Point.jpg/800px-Top_Thrill_Dragster_at_Cedar_Point.jpg",
        descricao: "Conhecida por sua aceleração de 0 a 190 km/h em menos de 4 segundos."
    },
    {
        nome: "Formula Rossa",
        local: "Ferrari World, Emirados Árabes Unidos",
        imagem: "https://www.experienceuk.org/uploads/news-pictures/24--blog-post-image-20211011111203.jpg",
        descricao: "A montanha-russa mais rápida do mundo, atingindo 240 km/h."
    },
    {
        nome: "Millennium Force",
        local: "Cedar Point, EUA",
        imagem: "https://www.intamin.com/wp-content/uploads/2019/11/milenium-force-06-1920x1280.jpg",
        descricao: "Uma das montanhas-russas mais populares e premiadas do mundo."
    }
];

function carregarMontanhas() {
    const container = document.getElementById('montanhas-russas');
    montanhasRussa.forEach(montanha => {
        const montanhaDiv = document.createElement('div');
        montanhaDiv.classList.add('montanha');
        montanhaDiv.innerHTML = `
            <img src="${montanha.imagem}" alt="${montanha.nome}">
            <h2>${montanha.nome}</h2>
            <p><strong>Local:</strong> ${montanha.local}</p>
            <p>${montanha.descricao}</p>
        `;
        container.appendChild(montanhaDiv);
    });
}

window.onload = carregarMontanhas;
