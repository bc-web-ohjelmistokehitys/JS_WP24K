# Rakenna Pancake-tilaussivu dynaamisella hinnoittelulla jatkuu

## Vaihe 2

_Asiakas haluaa tilausta tehdessään nähdä, miten hänen valintansa vaikuttavat kokonaishintaan. Asiakas haluaa tilauksen tehtyään nähdä sen yhdeenvedon._

Kehitä sovellusta lisäämällä ominaisuus, joka näyttää yksityiskohtaisen yhteenvedon pannukakkutilauksesta, tallentaen asiakkaan valinnat ja kokonaishinnan.

1. Tallenna käyttäjän vuorovaikutukset: Toteuta tapahtumakuuntelijat reagoimaan käyttäjän valintoihin.
2. Tarkka hintalaskenta: Hienosäädä hinnoittelulogiikkaa ottaen huomioon:

   - Valitun pannukakkulajikkeen perushinta.
   - Valittujen täytteiden ja lisukkeiden lisäkustannukset. Seuraa näitä valintoja niin, että ne voidaan eritellä tilauksen yhteenvedossa.

3. Tilausten koostumuksen seuranta: Käytä taulukoita hallitsemaan täytteiden ja lisukkeiden valintaa ja poistoa, varmistaen tilauksen sisällön ja kokonaishinnan dynaamisen säätämisen.
4. Tilauksen yhteenvedon näyttäminen: Tee tilaus -nappia painettaessa näytä perusteellinen yhteenveto. Siinä tulee näkyä:

   - Asiakkaan nimi.
   - Valittu pannukakkutyyppi, selvästi esitettynä.
   - Kattava luettelo valituista täytteistä ja lisukkeista. Voit sisällyttää myös valintojen hinnan.
   - Lopullinen laskettu kokonaishinta.
   - Selkeyden vuoksi käytä esitystapaa, joka muistuttaa laskua tai kuittia.

## Vaihe 3

_Pannukakkuravintola haluaa sivun, jolta seurata ja tarvittaessa muokata tilauksia ja johon merkitä tilauksen statukseksi `valmis`, kun annos on saatu valmiiksi._

Hyödynnä olio-ohjelmointia toteuttaaksesi tilauksenhallintatoimintoja, jotka mahdollistavat useiden tilausten seurannan, tilausten statuksen päivittämisen ja tilausten näyttämisen erillisellä hallintasivulla.

1. Toteuta tilausluokka:

   - Määrittele tilausluokka, joka kapseloi pannukakkutilaukseen liittyvät ominaisuudet ja metodit, mukaan lukien asiakkaan nimi, pannukakkutyyppi, täytteet, lisukkeet, kokonaishinta ja valmistumistila.
   - Luokan tulisi tarjota metodeja kokonaishinnan laskemiseen, täytteiden ja lisukkeiden lisäämiseen tai poistamiseen ja tilauksen valmistumistilan kytkemiseen.

2. Hallitse useita tilauksia:

   - Kehitä järjestelmä useiden tilausten seurantaan käyttämällä taulukkoa. Tämän järjestelmän tulisi tukea uusien tilausten lisäämistä, olemassa olevien päivittämistä ja tilausten merkitsemistä valmiiksi.

3. Luo erillinen tilauksen hallintasivu:

   - Suunnittele ja toteuta erillinen HTML-sivu tilausten hallintaa varten. Tämän sivun tulisi listata kaikki tilaukset niiden yksityiskohdilla ja mahdollistaa tilauksen hallinta, kuten sen muokkaaminen ja tilausten merkitseminen valmiiksi.
   - Varmista, että on tapa siirtyä tilauksen tekemissivun ja niiden hallintasivun välillä.

4. Sisällytä tilauksen vuorovaikutus hallintasivulla:

   - Tilausten hallintasivulla mahdollista toiminnallisuus tilausten statuksen päivittämiseksi. Toteuta käyttöliittymäelementit (kuten painikkeet tai valintaruudut) tilausten merkitsemiseksi valmiiksi ja päivittämään nämä muutokset järjestelmässä ja käyttöliittymässä.

5. **Vapaaehtoinen** Säilytä tilaukset istuntojen välillä:

   - Jos haluat haastaa itseäsi, toteuta tilausten tallentaminen käyttäen paikallista tallennustilaa. Näin tilausten tiedot säilyvät selainistuntojen välillä.
