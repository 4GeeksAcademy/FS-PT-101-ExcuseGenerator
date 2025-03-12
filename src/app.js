import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const excuseFunction = (num1, num2, num3, num4) => {

    const subject = ['a dog','a random kid','a policeman','my mom','the boss'];
    const action = ['pooped in','stole','shot at','took away','destroyed'];
    const target = ['my jacket','my car','my window','my food','my laptop'];
    const time = ['yesterday','a few hours ago','in the last seconds','last week','this morning'];

    let excuse = subject[num1] + " " + action[num2] + " " + target[num3] + " " + time[num4]
    
    return excuse
  }
  const generateRandomNumberBetween1And5 = () => Math.floor(Math.random() * (5 - 0) + 0);

    const changeText = document.getElementById("excuse")

     changeText.innerText = excuseFunction(generateRandomNumberBetween1And5(),generateRandomNumberBetween1And5(),generateRandomNumberBetween1And5(),generateRandomNumberBetween1And5());

};
