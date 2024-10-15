// Validation du formulaire de contact
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche l'envoi du formulaire par défaut
  
    // Récupération des champs du formulaire
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Validation simple des champs
    if (name === "" || email === "" || message === "") {
      alert("Veuillez remplir tous les champs.");
      return; // Arrête l'exécution si les champs ne sont pas remplis
    }
  
    // Vérification d'un email valide (exemple basique)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Veuillez entrer un email valide.");
      return;
    }
  
    // Si tout est correct
    alert("Merci pour votre message, " + name + " ! Nous vous répondrons bientôt.");
    
    // Réinitialisation du formulaire après validation
    document.querySelector('form').reset();
  });
  
  // Effet de survol pour les éléments de projet (Exemple)
  const projectItems = document.querySelectorAll('li strong');
  
  projectItems.forEach(item => {
    item.addEventListener('mouseover', function() {
      item.style.color = '#ff6f61'; // Change la couleur au survol
    });
  
    item.addEventListener('mouseout', function() {
      item.style.color = ''; // Restaure la couleur d'origine
    });
  });
  
  // Ajouter un effet de défilement lisse pour les liens d'ancrage (si vous ajoutez des sections ancrées)
  document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.hash !== "") {
        e.preventDefault();
        const hash = this.hash;
        document.querySelector(hash).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  