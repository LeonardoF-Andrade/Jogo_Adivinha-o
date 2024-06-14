const result = Math.round(Math.random() * 10);
let Attempts = 0;


//Function callback
function handleClick(event) {
  event.preventDefault();

  const input = document.querySelector("input");

  if (input.value != result) {
    alert("Você errou tente novamente!");
  } else {
    document.querySelector(".screen1").classList.add("hide");
    document.querySelector(".screen2").classList.remove("hide");
  }
  Attempts++;
  document.querySelector(
    "h2"
  ).innerText = `Você acertou em  ${Attempts} tentativas!`;
  document.querySelector("input").value = "";
  //console.log(input.value);
}

function tryAgain() {
  document.querySelector(".screen2").classList.add("hide");
  document.querySelector(".screen1").classList.remove("hide");
  Attempts = 0;
  document.querySelector("h2").innerHTML = "";
  document.querySelector("input").value = "";
}

const btnTry = document.querySelector("#btnTry");
const btnRst = document.querySelector("#btnRst");


btnTry.addEventListener("click", handleClick);
btnRst.addEventListener("click", tryAgain);
