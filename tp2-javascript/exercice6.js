let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;
//partie a
console.log("nom ?? :", nom ?? "valeur par défaut");
console.log("age ?? :", age ?? "valeur par défaut");
console.log("ville ?? :", ville ?? "valeur par défaut");
console.log("score ?? :", score ?? "valeur par défaut");
console.log("actif ?? :", actif ?? "valeur par défaut");
//partie b
console.log("nom || :", nom || "valeur par défaut");
console.log("age || :", age || "valeur par défaut");
console.log("ville || :", ville || "valeur par défaut");
console.log("score || :", score || "valeur par défaut");
console.log("actif || :", actif || "valeur par défaut");
// partie c
function comparer(nomVar, valeur) {
  let r1 = valeur ?? "valeur par défaut";
  let r2 = valeur || "valeur par défaut";

  let resultat = (r1 === r2)
    ? "même résultat"
    : "résultat différent";

  console.log(nomVar + " : ?? et || -> " + resultat);
}

comparer("nom", nom);
comparer("age", age);
comparer("ville", ville);
comparer("score", score);
comparer("actif", actif);