async function searchData() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase().trim();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; 

    const validEndpoints = ['posts', 'users', 'comments', 'albums', 'photos'];

    if (!validEndpoints.includes(searchInput)) {
        resultsDiv.innerHTML = `<p>Please enter a valid search term: posts, users, comments, albums, or photos.</p>`;
        return;
    }

    try {
        let url = `https://jsonplaceholder.typicode.com/${searchInput}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.length === 0) {
            resultsDiv.innerHTML = '<p>No results found.</p>';
            return;
        }

        data.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');

            if (searchInput === 'users') {
                resultItem.innerHTML = `
                    <h2>${item.name}</h2>
                    <p>Email: ${item.email}</p>
                    <p>Phone: ${item.phone}</p>
                    <p>Website: ${item.website}</p>
                `;
            } else if (searchInput === 'posts' || searchInput === 'comments' || searchInput === 'albums') {
                resultItem.innerHTML = `
                    <h2>${item.title}</h2>
                    <p>${item.body || item.title}</p>
                `;
            } else if (searchInput === 'photos') {
                resultItem.innerHTML = `
                    <h2>${item.title}</h2>
                    <img src="${item.thumbnailUrl}" alt="${item.title}">
                `;
            }
            
            resultsDiv.appendChild(resultItem);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
        resultsDiv.innerHTML = '<p>There was an error fetching the data. Please try again.</p>';
    }
}
