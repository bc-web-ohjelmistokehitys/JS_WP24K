/* Kun strict mode ei ole päällä, alla oleva koodi toimii ja ohjelma luo 
globaalin muuttujan x ilman, että sitä alustetaan let, const tai var -avainsanalla.
Kun strict mode on päällä, konsoliin tulee virhe.
*/
"use strict";

x = 10;
console.log("Muuttujan x arvo on:", x);