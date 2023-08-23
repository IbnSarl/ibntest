// Génère un token CSRF unique pour chaque utilisateur
function generateCSRFToken() {
    let token = ""; // Générer un token aléatoire
    // Stocker le token dans la session de l'utilisateur
    sessionStorage.setItem('csrf_token', token);
    // Ajouter le token à l'input hidden du formulaire
    document.getElementById('csrf_token').value = token;
  }
  
  // Vérifie si le token dans la requête correspond au token stocké dans la session
  function checkCSRFToken() {
    let storedToken = sessionStorage.getItem('csrf_token');
    let requestToken = document.getElementById('csrf_token').value;
    if (storedToken !== requestToken) {
      // Le token CSRF ne correspond pas, traitement de l'erreur
      alert("Erreur CSRF détectée !");
      return false;
    }
    return true;
  }
  
  // Appeler la fonction generateCSRFToken lors du chargement de la page
  window.onload = generateCSRFToken;
  