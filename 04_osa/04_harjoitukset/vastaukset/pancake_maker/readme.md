# Rakenna Pancake-tilaussivu dynaamisella hinnoittelulla

Tavoite: Toteuta JavaScript-toiminnallisuus pannukakkujen tilaustyökalulle, joka päivittää hinnan dynaamisesti käyttäjän valintojen perusteella, kuten pannukakun tyyppi, täytteet ja lisukkeet. HTML ja CSS ovat valmiina; tehtäväsi on lisätä JavaScript, jotta sivusta tulee vuorovaikutteinen.

Tehtäväsi on kirjoittaa JavaScript-koodi, joka:

1. Kuuntelee muutoksia pannukakun tyyppi -valintaruudussa ja kaikissa valintaruutuissa.
2. Laskee kokonaishinnan valintojen perusteella:
   - Pannukakun tyyppiin liittyy perushinta.
   - Jokainen täyte lisää 1€ perushintaan.
   - Lisukkeilla on omat hintansa.
3. Näyttää dynaamisesti päivitetyn kokonaishinnan #totalPrice span -elementissä.

Käytä `addEventListener` -metodia muutosten kuuntelemiseen ja `forEach` -metodia valintaruutujen läpikäymiseen kokonaishinnan laskemiseksi. Muista muuntaa valintaruutujen arvot kokonaisluvuiksi ennen niiden lisäämistä kokonaishintaan.

# Valinnaiset lisäykset

- Integroi fontti Google Fontsista sovellettavaksi kaikille sivun elementeille. Valitse fontti, joka sopii projektin moderniin ja houkuttelevaan ulkoasuun.
- Säädä pannukakun kuvaa peittämään 50% sivusta ja ulottumaan täyteen näyttökorkeuteen, luoden visuaalisesti vaikuttavan ulkoasun.
- Toteuta kiehtova animaatio hintanäytölle kiinnittääksesi huomiota hintamuutoksiin.
- Varmista, että sovelluksesi näyttää hyvältä sekä työpöytä- että mobiililaitteilla käyttämällä responsiivisen suunnittelun tekniikoita.
