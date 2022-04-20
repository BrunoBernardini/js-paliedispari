/*
  Palidroma
  Chiedere all’utente di inserire una parola
  Creare una funzione per capire se la parola inserita è palindroma
  Bonus: L’inserimento avviene tramite un campo input

  Pari e Dispari
  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
  Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  Sommiamo i due numeri
  Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
  Dichiariamo chi ha vinto.
  Bonus: L’inserimento avviene tramite un campo input
 */

const btnPalindroma = document.querySelector("#btnPalindroma");
const btnPariDispari = document.querySelector("#btnPariDispari");

// -----------{Pulsanti}-----------

btnPalindroma.addEventListener("click", function(){
  if(isPalindroma(document.getElementById("parolaPalindroma").value)){
    outputInClass(".palindromaOutput", "Sì! :D");
  }
  else{
    outputInClass(".palindromaOutput", "No! :c");
  }
});

btnPariDispari.addEventListener("click", function(){
  const min = 1, max = 5, numero = parseInt(document.getElementById("numero").value);
  const pariDispari = document.getElementById("selPariDispari").value

  if(numero<min || numero>max){
    outputInClass(".pariDispariOutput", "Devi inserire un numero da 1 a 5!")
  }
  else{
    const random = getRandomNumber(min,max);
    let sum = numero+random;
    let result = `Numero inserito: ${numero}; Numero random: ${random}; Somma: ${sum} [${isPari(sum)}]`;

    if(isPari(sum) === pariDispari){
      result +="<br>Hai vinto!";
    }
    else{
      result +="<br>Hai perso!";
    }
    document.querySelector(".pariDispariOutput").innerHTML = result;
  }
})

// -----------{Funzioni principali}-----------

function isPalindroma(word){
  let palindroma = true;
  for(let i=0; i<word.length/2; i++){
    if(word.charAt(i) !== word.charAt(word.length-(i+1))) palindroma = false;
  }
  return palindroma;
}

function getRandomNumber(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

function isPari(number){
  if(!(number%2)){
    return "pari"
  }
  else{
    return "dispari"
  }
}

// -----------{Utility}-----------

function outputInClass(tagClass, content){
  document.querySelector(tagClass).innerHTML = content;
}
