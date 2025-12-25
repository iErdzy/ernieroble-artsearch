const apiKey = 'cf8db2e159b246218d84fdf1b2b9054b'; 

const resultsGrid = document.getElementById('resultsGrid');
const searchInput = document.getElementById('searchInput');

document.getElementById('searchBtn').addEventListener('click', () => searchArt(searchInput.value));
document.getElementById('randomBtn').addEventListener('click', getRandomArt);

async function searchArt(query) {
    if (!query.trim()) return;

    const targetUrl = `https://api.apileague.com/search-artworks?query=${encodeURIComponent(query)}&number=10&api-key=${apiKey}`;
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`;

    showLoading();
    try {
        const response = await fetch(proxyUrl);
        const data = await response.json();
        const apiResponse = JSON.parse(data.contents);

        if (apiResponse.status === 'failure') throw new Error(apiResponse.message);

        displayResults(apiResponse.artworks || [], false);
    } catch (error) {
        showError("Search failed. Check your API quota.");
    }
}

async function getRandomArt() {
    const topics = ['Renaissance', 'Impressionism', 'Abstract', 'Portrait', 'Landscape', 'Sculpture', 'Ancient', 'Oil', 'History'];
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    const randomOffset = Math.floor(Math.random() * 50); 
    
    // CACHE BUSTER: The Date.now() ensures AllOrigins doesn't return the same old result
    const cacheBuster = Date.now();
    const targetUrl = `https://api.apileague.com/search-artworks?query=${randomTopic}&offset=${randomOffset}&number=1&api-key=${apiKey}&cb=${cacheBuster}`;
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`;

    showLoading();
    try {
        const response = await fetch(proxyUrl);
        const data = await response.json();
        const apiResponse = JSON.parse(data.contents);
        
        displayResults(apiResponse.artworks || [], true);
    } catch (error) {
        showError("The archives are busy. Try again.");
    }
}

function displayResults(artworks, isRandom) {
    resultsGrid.innerHTML = '';
    if (!artworks || artworks.length === 0) {
        resultsGrid.innerHTML = '<p class="subtitle">No masterpieces found for that criteria.</p>';
        return;
    }

    const container = isRandom ? document.createElement('div') : resultsGrid;
    if (isRandom) {
        container.className = 'centered-view';
        resultsGrid.appendChild(container);
    }

    artworks.forEach(art => {
        const card = document.createElement('div');
        card.className = 'art-card';
        card.innerHTML = `
            <img src="${art.image}" alt="${art.title}" onerror="this.src='https://via.placeholder.com/400x500?text=Restoring+Artwork...'">
            <div class="card-content">
                <h3>${art.title || 'Untitled'}</h3>
                <p>Catalogue ID: ${art.id}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function showLoading() { resultsGrid.innerHTML = '<p class="subtitle">Curating the gallery...</p>'; }
function showError(msg) { resultsGrid.innerHTML = `<p style="color:red; font-style:italic;">${msg}</p>`; }