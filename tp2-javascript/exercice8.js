let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

// nom
let nomCorrige = nom.trim();
if (nomCorrige === "") {
  nomCorrige = "Inconnu";
}

// age
let ageCorrige = parseInt(age);
let ageValide = !Number.isNaN(ageCorrige) && ageCorrige > 0;

// email
let positionAt = email.indexOf("@");
let positionPoint = email.indexOf(".", positionAt + 1);
let emailValide = positionAt !== -1 && positionPoint !== -1;

// scoreJeu
let scoreCorrige = parseInt(scoreJeu);
if (Number.isNaN(scoreCorrige)) {
  scoreCorrige = 0;
}

// estAdmin
let estAdminCorrige = (estAdmin === "true");

// derniereConnexion
let derniereConnexionCorrige = derniereConnexion ?? "Jamais connecté";

// nombreConnexions
let nombreConnexionsCorrige = Number(nombreConnexions);
let affichageConnexions =
  nombreConnexionsCorrige === 0
    ? "Aucune connexion"
    : nombreConnexionsCorrige;

 console.log("===== RAPPORT UTILISATEUR =====");
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)');
console.log(
  "age              : " +
  ageCorrige +
  (ageValide ? " (valide)" : " (valeur invalide)")
);
console.log(
  'email            : "' +
  email +
  '" ' +
  (emailValide
    ? "(valide)"
    : "(invalide : pas de point après @)")
);
console.log(
  'scoreJeu         : ' +
  scoreCorrige +
  ' (extrait depuis "' + scoreJeu + '")'
);
console.log(
  "estAdmin         : " +
  estAdminCorrige +
  " (attention : Boolean(\"false\") = true, conversion manuelle requise)"
);
console.log(
  'derniereConnexion: "' +
  derniereConnexionCorrige +
  '" (valeur par défaut via ??)'
);
console.log(
  'nombreConnexions : "' +
  affichageConnexions +
  '" (0 après conversion)'
);
console.log("================================");