let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

// Q2 : boucle for pour parcourir notre tableau
for (let i = 0; i < valeurs.length; i++) {
    let v = valeurs[i];

    // pour le cas du chaîne vide
    let affichage;
    if (v === "") {
        affichage = "(chaine vide)";
    } else {
        affichage = String(v);
    }

    // Test truthy or falsy
    let etat = v ? "truthy" : "falsy";

    // Affichage de résultat
    console.log(affichage + " -> " + etat);
}