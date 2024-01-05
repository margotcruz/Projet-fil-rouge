// Fonction générique pour réinitialiser et afficher les alertes
function resetAndShowAlert(alertSelector, message) {
    $(".alert").hide(); // Réinitialiser toutes les alertes
    $(alertSelector).text(message).show(); // Afficher l'alerte spécifiée avec le message
  }
  
  // Validation du formulaire de commande
  $(document).ready(function () {
    $("#mon_formulaire").on("submit", function (event) {
      event.preventDefault();
      validerFormulaireCommande();
    });
  });
  
  function validerFormulaireCommande() {
      if ($("#adresse").val() === "") {
        resetAndShowAlert("#alertAdresse", "Veuillez entrer votre adresse.");
    }
    if ($("#telephone").val() === "") {
      resetAndShowAlert("#alertTelephone", "Veuillez entrer votre téléphone.");
    }
    if ($("#email").val() === "") {
      resetAndShowAlert("#alertEmail", "Veuillez entrer votre email.");
    }
    
    if ($("#prenom").val() === "") {
      resetAndShowAlert("#alertPrenom", "Veuillez entrer votre prénom.");
    }
  
    if ($("#nom").val() === "") {
      resetAndShowAlert("#alertNom", "Veuillez entrer votre nom.");
    }
  
  
  }
  
  // Validation du formulaire de contact
  $(document).ready(function () {
    $("#mon_formulaire_contact").on("submit2", function (event) {
      event.preventDefault();
      validerFormulaireContact();
    });
  });
  
  function validerFormulaireContact() {
    if ($("#nom").val() === "") {
      resetAndShowAlert("#alertNom2", "Veuillez entrer votre nom.");
    }
  
    if ($("#prenom").val() === "") {
      resetAndShowAlert("#alertPrenom2", "Veuillez entrer votre prénom.");
    }
  
    if ($("#email").val() === "") {
      resetAndShowAlert("#alertEmail2", "Veuillez entrer votre email.");
    }
  
    if ($("#telephone").val() === "") {
      resetAndShowAlert("#alertTelephone2", "Veuillez entrer votre téléphone.");
    }
  
    if ($("#demande").val() === "") {
      resetAndShowAlert("#alertDemande", "Veuillez entrer votre demande.");
    }
  }
  

// Selecteur de quantité page commande

$(document).ready(function () {
  var select = $(".selectpicker");

  // Ajouter une option par défaut
  select.append('<option value="" selected disabled> Quantité : </option>');

  // Ajouter des options numérotées de 1 à 100
  for (var i = 1; i <= 100; i++) {
    select.append('<option value="' + i + '">' + i + "</option>");
  }

  // Rafraîchir le plugin Bootstrap Select après l'ajout des options
  select.selectpicker("refresh");
});


