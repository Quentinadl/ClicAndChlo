<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Récupérer les données du formulaire
  $nom = $_POST["nom"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Paramètres de l'e-mail
  $to = "quentin.adeline18@.com"; // Remplacez cette adresse e-mail par votre propre adresse e-mail
  $sujet = "Nouveau message de $nom";
  $headers = "From: $email";

  // Envoyer l'e-mail
  if (mail($to, $sujet, $message, $headers)) {
    echo "Votre message a été envoyé avec succès.";
  } else {
    echo "Une erreur est survenue lors de l'envoi de votre message.";
  }
}
?>