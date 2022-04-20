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

btnPalindroma.addEventListener("click", function(){
  if(isPalindroma(document.getElementById("parolaPalindroma").value)){
    outputInClass(".palindromaOutput", "Sì! :D");
  }
  else{
    outputInClass(".palindromaOutput", "No! :c");
  }
});

function isPalindroma(word){
  let palindroma = true;
  for(let i=0; i<word.length/2; i++){
    if(word.charAt(i) !== word.charAt(word.length-(i+1))) palindroma = false;
  }
  return palindroma;
}

function outputInClass(tagClass, content){
  document.querySelector(tagClass).innerHTML = content;
}

// let parola = document.getElementById("parolaPalindroma").value;
// let selPariDispari = document.getElementById("selPariDispari").value;
// let numero = document.getElementById("numero").value;
