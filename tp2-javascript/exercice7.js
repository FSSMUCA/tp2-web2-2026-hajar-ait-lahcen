let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

let sousTotal = prix * quantite;
console.log("Sous-total :", sousTotal, "MAD");

let reduction = 0;

if ((codePromo ?? null) !== null && estMembre) {
  reduction = sousTotal * (reductionPourcentage / 100);
}

console.log("Réduction :", reduction, "MAD");

let totalFinal = sousTotal - reduction;
console.log("Total final :", totalFinal, "MAD");

let paiementAccepte = soldeCompte >= totalFinal;
let statut = paiementAccepte ? "Paiement accepté" : "Solde insuffisant";

console.log("Statut :", statut);

let nouveauSolde = paiementAccepte
  ? soldeCompte - totalFinal
  : soldeCompte;

console.log("Produit   :", nomProduit);
console.log("Quantité  :", quantite);
console.log("Prix unit.:", prix, "MAD");
console.log("Sous-total:", sousTotal, "MAD");
console.log("Réduction :", reduction, "MAD");
console.log("Total     :", totalFinal, "MAD");
console.log("Statut    :", statut);
console.log("Solde     :", nouveauSolde, "MAD");