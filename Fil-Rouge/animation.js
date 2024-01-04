$(document).ready(function () {
    // Fonction de vérification du formulaire
    function verifierFormulaire() {
      // Réinitialiser les alertes
      $(".alert").hide();

      // Variables pour la validation
      var formulaireValide = true;

      // Vérification du champ Nom
      var nom = $("#nom").val().trim();
      if (nom === "") {
        $("#alertNom").show();
        formulaireValide = false;
      }

      // Vérification du champ Prénom
      var prenom = $("#prenom").val().trim();
      if (prenom === "") {
        $("#alertPrenom").show();
        formulaireValide = false;
      }

      // Vérification du champ Email
      var email = $("#email").val().trim();
      if (email === "" || !isValidEmail(email)) {
        $("#alertEmail").show();
        formulaireValide = false;
      }

      // Vérification du champ Téléphone
      var telephone = $("#telephone").val().trim();
      if (telephone === "" || !isValidPhone(telephone)) {
        $("#alertTelephone").show();
        formulaireValide = false;
      }

      // Vérification du champ Adresse
      var adresse = $("#adresse").val().trim();
      if (adresse === "") {
        $("#alertAdresse").show();
        formulaireValide = false;
      }

      return formulaireValide;
    }

    // Validation de l'e-mail avec une expression régulière simple
    function isValidEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    // Validation du numéro de téléphone avec une expression régulière simple
    function isValidPhone(telephone) {
      var phoneRegex = /^\d{10}$/;
      return phoneRegex.test(telephone);
    }

    // Gestionnaire d'événement pour le formulaire
    $("#mon_formulaire").submit(function (event) {
      if (!verifierFormulaire()) {
        event.preventDefault(); // Empêcher l'envoi du formulaire s'il n'est pas valide
        alert("Le formulaire n'est pas valide. Veuillez vérifier les champs.");
      }
    });
  });