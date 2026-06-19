import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];
const dot = ['.com','.net','.gov']

const combinaciones = []

for (let i = 0; i < pronoun.length; i++) {

  for (let j = 0; j < adj.length; j++) {

    for (let k = 0; k < noun.length; k++) {

      for (let l = 0; l < dot.length; l++) {
        

        combinaciones.push(pronoun[i] + adj[j] + noun[k] + dot[l])
      }
      
      
    }
    
  }
  
}

console.log(combinaciones);






};

