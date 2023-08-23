window.addEventListener('load', function() {
    fetch('https://example.com/api/data', {
        method: 'GET',
        headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0'
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Traiter les données reçues
    })
    .catch(function(error) {
        console.error('Erreur lors de la requête :', error);
    });
});