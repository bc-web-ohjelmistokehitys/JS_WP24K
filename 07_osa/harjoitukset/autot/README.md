# Autot

1. **Luo auto-luokka:**

   - Määrittele `Auto`-luokka, jolla on ominaisuudet auton rekisterinumerolle, valmistajalle, mallille, nykyiselle omistajalle, hinnalle ja värille.

2. **Käyttäjän syöte auton tiedoille:**

   - Luo HTML-lomake, johon käyttäjät voivat syöttää auton rekisterinumeron, valmistajan, mallin, nykyisen omistajan, hinnan ja värin.
   - Käytä JavaScriptiä keräämään käyttäjän syöttämät arvot, kun lomake lähetetään.

3. **Luo ja tallenna auto-olioita:**

   - Lomakkeen lähetyksen yhteydessä luo uusi `Auto`-olio kerättyjen syötteiden arvoilla.
   - Lisää tämä uusi `Auto`-olio taulukkoon, joka tallentaa kaikki käyttäjän syöttämät autot.

4. **Näytä auton tiedot:**

   - Käytä JavaScriptiä luomaan dynaamisesti taulukko verkkosivulle, jossa näytetään jokaisen auton tiedot taulukossa.
   - Varmista, että taulukko päivittyy sisältämään jokaisen uuden auton, kun se lisätään.

5. **Etsi auto rekisterinumerolla:**

   - Toteuta toiminto, joka mahdollistaa käyttäjän etsimisen autolla sen rekisterinumeron perusteella.
   - Sisällytä virheenkäsittely hallitsemaan tapauksia, joissa haun syöte on virheellinen tai rekisterinumeroa ei löydy.

6. **Näytä hakutulokset:**

   - Jos haku löytää auton onnistuneesti, näytä auton valmistaja, malli ja omistaja näytöllä.
   - Jos vastaavaa autoa ei löydy, näytä viesti, joka ilmoittaa, ettei tuloksia löytynyt.

7. **Toteuta virheenkäsittely:**

   - Käytä `try...catch`-lohkoja käsittelemään mahdolliset virheet, jotka voivat ilmetä, erityisesti haun aikana, kuten virheellinen syöte tai rekisterinumeroa, joka ei ole rekisterissä.

8. **Bonus:**
   - Lisää sivulle tyylimäärittelyt, jotta se näyttää selkeämmältä ja tyylikkäämmältä
