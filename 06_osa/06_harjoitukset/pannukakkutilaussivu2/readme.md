# Rakenna Pancake-tilaussivu dynaamisella hinnoittelulla osa 2

## Vaihe 2

Kehitä sovellusta integroimalla ominaisuus, joka näyttää yksityiskohtaisen yhteenvedon pannukakkutilauksesta, tallentaen asiakkaan mieltymykset ja laskettu kokonaishinta.

1. Tallenna käyttäjän vuorovaikutukset: Toteuta tapahtumakuuntelijat reagoimaan painikkeen napsautuksiin, aloittaen tilauksen yhteenvedon näyttämisen.
2. Tarkka hintalaskenta: Hienosäädä hinnoittelulogiikkaa ottaen huomioon:

- Valitun pannukakkulajikkeen perushinta.
- Valittujen lisukkeiden ja extrojen lisäkustannukset, seuraten näitä valintoja tehokkaasti tilauksen yksityiskohtaista hajoamista varten.

3. Tilausten koostumuksen seuranta: Käytä taulukoita hallitsemaan täytteiden ja lisäaineiden valintaa ja poistoa, varmistaen tilauksen sisällön ja kokonaishinnan dynaamisen säätämisen.
4. Tilauksen yhteenvedon näyttö: Toimiessaan määrätyllä painikkeella, esittele perusteellinen yhteenveto, jossa kuvataan:

- Asiakkaan nimi, joka tekee tilauksen.
- Valittu pannukakkutyyppi, selvästi esitettynä.
- Kattava luettelo valituista lisukkeista ja muista täytteistä.
- Lopullinen laskettu kokonaishinta.
- Hyödynnä esitystapaa, joka muistuttaa laskua parannetun selkeyden ja ammattimaisuuden vuoksi.

## Vaihe 3

Hyödynnä olioperustaista ohjelmointia esitelläksesi edistyneitä tilauksenhallintatoimintoja, jotka mahdollistavat useiden tilausten seurannan, tilausten tilojen päivittämisen ja tilausten näyttämisen erillisellä hallintasivulla.

1. Toteuta tilausluokka:

- Määrittele tilausluokka, joka kapseloi pannukakkutilaukseen liittyvät ominaisuudet ja metodit, mukaan lukien asiakkaan nimi, pannukakkutyyppi, lisukkeet, extrat, kokonaishinta ja valmistumistila.
- Luokan tulisi tarjota metodeja kokonaishinnan laskemiseen, lisukkeiden ja extrojen lisäämiseen tai poistamiseen ja tilauksen valmistumistilan kytkemiseen.

1. Hallitse useita tilauksia:

- Kehitä järjestelmä useiden tilausten seurantaan käyttämällä taulukkoa. Tämän järjestelmän tulisi tukea uusien tilausten lisäämistä, olemassa olevien päivittämistä ja tilausten merkitsemistä valmiiksi.

3. Luo erillinen tilauksen hallintasivu:

- Suunnittele ja toteuta erillinen HTML-sivu tilausten hallintaa varten. Tämän sivun tulisi listata kaikki tilaukset niiden yksityiskohdilla ja mahdollistaa hallinnolliset toimet, kuten tilausten merkitseminen valmiiksi.
- Varmista, että on tapa siirtyä tilauksen tekemissivun ja tilauksen hallintasivun välillä.

4. Sisällytä tilauksen vuorovaikutus hallintasivulla:

- Tilauksen hallintasivulla mahdollista toiminnallisuus tilausten tilan päivittämiseksi. Toteuta käyttöliittymäelementit (kuten painikkeet tai valintaruudut) tilausten merkitsemiseksi valmiiksi ja heijastamaan nämä muutokset järjestelmässä ja käyttöliittymässä.

5. Säilytä tilaukset istuntojen välillä:

Valinnaisesti, edistyneen haasteen tarjoamiseksi, toteuta toiminnallisuus tilausten tallentamiseksi paikalliseen tallennustilaan, mahdollistaen tilausten säilymisen selainistuntojen välillä.
