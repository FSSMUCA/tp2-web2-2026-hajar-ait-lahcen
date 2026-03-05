let tests = [ [0, ""],[0, "0"],[0, false],["", false],[null, undefined],[null, false],[NaN, NaN],[1, "1"],[" \t\n ", 0]];
let compteur = 0;

for (let i = 0; i < tests.length; i++) {
  let a = tests[i][0];
  let b = tests[i][1];

  let egal = (a == b);
  let strict = (a === b);

  console.log(
    String(a) + " == " + String(b) + " -> " + egal +
    " | " +
    String(a) + " === " + String(b) + " -> " + strict
  );

  if (egal === true && strict === false) {compteur++;}
}
