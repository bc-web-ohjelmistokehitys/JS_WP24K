document.addEventListener("DOMContentLoaded", function() {
  const lomake = document.getElementById("tuote-lomake");
  const hintaElementti = document.getElementById("hinta");
  let hinta = 0;

  lomake.addEventListener("change", function(event) {
    const checkboxit = lomake.querySelectorAll('input[name="tuote"]:checked');
    hinta = 0;
    checkboxit.forEach(function(checkbox) {
      hinta += 1; // Jokaisesta valitusta tuotteesta hinta kasvaa 1 eurolla
    });
    paivitaHinta();
  });

  function paivitaHinta() {
    hintaElementti.textContent = hinta;
  }
});
