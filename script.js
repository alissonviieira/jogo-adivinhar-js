// Gerando um número aleatório entre 1 e 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");

let tries = 0;

guessButton.addEventListener("click", function () {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    setMessage("Digite um número válido entre 1 e 100", "red");
    return;
  }

  tries++;

  if (userGuess === randomNumber) {
    setMessage(`Parabéns! Você acertou o número em ${tries} tentativas.`, "green");
    guessInput.disabled = true;
    guessButton.disabled = true;
  } else if (userGuess < randomNumber) {
    setMessage("Tente um número maior.", "blue");
  } else {
    setMessage("Tente um número menor.", "blue");
  }
});

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}
