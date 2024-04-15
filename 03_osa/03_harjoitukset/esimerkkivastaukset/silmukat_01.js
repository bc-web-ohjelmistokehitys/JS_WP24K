//Tee ohjelma, joka tulostaa kaikki parittomat numerot 1 ja 100 välillä. Eli 1, 3, 5, 7, 9, 11 jne.


// for-silmukalla
for (let i = 1; i < 100; i+=2) {
  console.log(i);
}

// while-silmukalla
let j = 1
while (j < 100){
  console.log(j);
  j +=2
} 

// Jos halutaan tieto samalle riville
let luvut = "";
for (let k=1; k<100; k+=2){
  luvut += k + ", "
}
console.log(luvut)