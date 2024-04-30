# JavaScript kirjoitussäännöt

Puhtaan, helposti ylläpidettävän ja virheettömän JavaScript-koodin luominen on tärkeää sekä aloittelijoille että kokeneille kehittäjille.

## Käytä `"use strict"`

- **Aktivoi strict mode:** Käytä aina `"use strict"` JavaScript-tiedostojen tai -funktioiden alussa tiukemman syntaksin ja virheenkäsittelyn noudattamiseksi.
- Tämä auttaa havaitsemaan yleisiä ohjelmointivirheitä ja estää tiettyjen ominaisuuksien käytön, jotka voisivat johtaa haavoittuvuuksiin koodissasi.

- ECMAScript 5:ssä esitelty `strict mode` tekee useita muutoksia normaaliin JavaScript-semantiikkaan:

  - Havaitsee hiljaiset virheet: On tiettyjä virheitä, joita koodissa ei välttämättä näy. `strict mode` näyttää nämä virheet, mikä auttaa korjaamaan ne helpommin.
  - Parantaa suorituskykyä: Koodi voidaan suorittaa nopeammin, koska `strict mode` helpottaa koodin optimointia JavaScript-moottoreille.
  - Valmistautuu tulevaisuuteen: Estää vanhentuneiden koodikuvioiden käyttämisen, jotka voisivat olla ristiriidassa tulevien JavaScript-päivitysten kanssa. Koodisi pysyy paremmin ajan tasalla.

## Omaksu yhtenäinen muotoilu

- **Sisennys:** Käytä yhtenäistä sisennystä (kuten 2 tai 4 välilyöntiä) tehdäksesi koodistasi helpommin luettavaa.
- **Puolipisteet:** Vaikka JavaScript-moottorit voivat lisätä puolipisteet automaattisesti, niiden lisääminen lauseiden loppuun voi estää mahdolliset virheet.
- **Aaltosulkeet:** Käytä aaltosulkeita jopa yksittäisille lohkoille parantaaksesi koodin selkeyttä ja estääksesi virheitä, kun lisäät myöhemmin lisää lauseita.
- **Prettier** auttaa useimmissa näissä.

## Määritä muuttujat asianmukaisesti

- **Käytä `let` ja `const`:** Suosi `let` ja `const`-muuttujia. Vältä `var`:ia välttääksesi scope-virheet.

## Nimeämisohjeet

- **Selkeät ja kuvaavat nimet:** Valitse muuttujien ja funktioiden nimet, jotka kuvaavat selvästi niiden tarkoitusta.
- Itsestäänselvyys on hyvä asia, anna luovuutesi kukkia muualla.
- Käytä camelCasea muuttujille ja funktioille.
- PascalCasea luokille.
- ISOJA_MERKKEJÄ vakioille.

## Funktiot

- **Pienet ja keskittyneet:** Kirjoita funktioita, jotka tekevät yhden asian ja tekevät sen hyvin. Funktion tulisi parhaimmillaan suorittaa vain yksi tehtävä tai toimenpide.
- **Argumentit:** Rajoita parametrien määrä funktioissasi. Jos funktio tarvitsee paljon parametreja, harkitse olioiden käyttöä.

## Kommentointi ja dokumentointi

- **Käytä kommentteja viisaasti:** Kommentoi koodiasi selittääksesi "miksi" jotain tehdään, sen sijaan, että selittäisit "mitä" tehdään, mikä tulisi käydä ilmi itse koodista.
- Hyvässä koodissa on kommentteja!
- **Dokumentointi:** Suurempia projekteja varten harkitse JSDocia tai vastaavia työkaluja koodikommenttien perusteella luotavan dokumentaation generointiin.

## Virheenkäsittely

- **Käytä `try...catch`-rakennetta viisaasti:** Kääri virhealttiit koodilohkot `try...catch`-rakenteen sisään käsitelläksesi mahdolliset virheet ja estääksesi niitä kaatamasta sovellustasi.
- **Mukautetut virheviestit:** Anna selkeitä ja hyödyllisiä virheviestejä, kun heität virheitä.

## Käytä ESLintiä

- **Lintteri** on työkalu, joka tarkistaa koodin laadun ja noudattaa tietyntyyppisiä sääntöjä tai standardeja. Se analysoi koodia etsien syntaksivirheitä, huonoja käytäntöjä, tyyliohjeiden noudattamista ja muita mahdollisia ongelmia.
- **ESLint** on JavaScriptissä yleisimmin käytetty lintteri. ESLintiä voidaan mukauttaa noudattamaan projektisi omia koodausstandardeja. Sen käyttöönotto saattaa olla hankalaa, mutta maksaa vaivan koodatessa.
- **Integroi editointiohjelmaasi:** Useimmilla koodieditoreilla on lisäosia tai integraatioita ESLintin kanssa, joten voit nähdä linttausvirheet ja varoitukset reaaliajassa koodatessasi.

## Jatka oppimista ja refaktorointia

- **Jatkuva oppiminen:** JavaScript ja sen ekosysteemi kehittyvät nopeasti. Jatka uusien tapojen, ominaisuuksien ja parhaiden käytäntöjen oppimista.
- **Refaktorointi** on prosessi, jossa olemassa olevaa koodia muokataan parantamaan sen rakennetta, ymmärrettävyyttä, ylläpidettävyyttä tai suorituskykyä ilman, että sen toiminnallisuus muuttuu. Tämä voi sisältää koodin uudelleenjärjestelyä, toistuvan koodin poistamista, nimeämiskonventioiden muuttamista, optimointia tai monimutkaisten algoritmien yksinkertaistamista.
- **Refaktoroi säännöllisesti!** Refaktoroi koodiasi parantaaksesi sen rakennetta, luettavuutta ja suorituskykyä, kun opit lisää ja kokemuksesi karttuu.
