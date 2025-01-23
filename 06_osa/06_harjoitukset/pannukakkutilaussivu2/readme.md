# Rakenna Pancake-tilaussivu dynaamisella hinnoittelulla jatkuu

## Vaihe 2

_Asiakas haluaa tilausta tehdessään nähdä, miten hänen valintansa vaikuttavat kokonaishintaan. Asiakas haluaa tilauksen tehtyään nähdä sen yhdeenvedon._

Kehitä sovellusta lisäämällä ominaisuus, joka näyttää pannukakkutilauksen yhteenvedon, tallentaen asiakkaan valinnat ja kokonaishinnan.

1. Toteuta tapahtumakuuntelijat reagoimaan käyttäjän valintoihin ja tallentamaan ne.
2. Tarkka hintalaskenta: Hienosäädä hinnoittelulogiikkaa ottaen huomioon:

   - Valitun pannukakkulajikkeen perushinta.
   - Valittujen täytteiden ja lisukkeiden lisäkustannukset. Seuraa näitä valintoja niin, että ne voidaan eritellä tilauksen yhteenvedossa.

3. Asiakkaan nimen kysyminen: Lisää tekstikenttä nimen syöttämistä varten. 
4.  Tilausten koostumuksen seuranta: Käytä taulukkoa tallentamaan tieto valituista täytteistä ja lisukkeista. Päivitä taulukon tiedot, jos valinta poistetaan. Välitä ajan tasalla oleva tieto tilauksen sisällöstä ja kokonaishinnasta.

5. Tilauksen yhteenvedon näyttäminen: Tee tilaus -nappia painettaessa näytä yhteenveto, jossa näkyy:

   - Asiakkaan nimi.
   - Valittu pannukakkutyyppi, selvästi esitettynä.
   - Kattava luettelo valituista täytteistä ja lisukkeista. Voit sisällyttää myös valintojen hinnan.
   - Lopullinen laskettu kokonaishinta.
   - Selkeyden vuoksi käytä esitystapaa, joka muistuttaa laskua tai kuittia.

## Vaihe 3

_Pannukakkuravintola haluaa sivun, jolta seurata ja tarvittaessa muokata tilauksia ja johon merkitä tilauksen statukseksi `valmis`, kun annos on saatu valmiiksi._

Käytä olio-ohjelmointia useiden tilausten seurantaan, tilausten statuksen päivittämiseen ja tilausten näyttämiseen erillisellä hallintasivulla. 

1. Toteuta tilausluokka:

   - Määrittele tilausluokka, joka kapseloi pannukakkutilaukseen liittyvät ominaisuudet ja metodit, mukaan lukien asiakkaan nimi, pannukakkutyyppi, täytteet, lisukkeet, kokonaishinta ja tilauksen status (esim. odottaa / valmis).
   - Luokan tulisi tarjota metodeja kokonaishinnan laskemiseen, täytteiden ja lisukkeiden lisäämiseen tai poistamiseen ja tilauksen valmistumistilan muokkaamiseen.

2. Hallitse useita tilauksia:

   - Toteuta ohjelmaan ratkaisu useiden tilausten seurantaan taulukkoa käyttämällä. Tämän tulisi tukea uusien tilausten lisäämistä, olemassa olevien päivittämistä ja tilausten merkitsemistä valmiiksi.

3. Luo erillinen tilauksen hallintasivu:

   - Suunnittele ja toteuta erillinen HTML-sivu tilausten hallintaa varten. Tämän sivun tulisi listata kaikki tilaukset niiden yksityiskohdilla ja mahdollistaa tilauksen hallinta, kuten sen muokkaaminen ja tilausten merkitseminen valmiiksi.
   - Varmista, että on tapa siirtyä tilauksen tekemissivun ja niiden hallintasivun välillä, esimerkiksi linkki tilaussivulta.

4. Sisällytä tilauksen vuorovaikutus hallintasivulla:

   - Tee tilausten hallintasivulle toiminnallisuus tilausten statuksen päivittämiseksi. Toteuta käyttöliittymäelementit (kuten painikkeet tai valintaruudut) tilausten merkitsemiseksi valmiiksi ja päivittämään nämä muutokset järjestelmässä ja käyttöliittymässä.

5. **Vapaaehtoinen** Säilytä tilaukset istuntojen välillä:

   - Jos haluat haastaa itseäsi, toteuta tilausten tallentaminen localHostiin. Näin tilausten tiedot säilyvät selainistuntojen välillä.
