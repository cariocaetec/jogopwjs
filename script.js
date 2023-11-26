
const secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {

    const userGuess = document.getElementById('user-guess').value;


    const messageElement = document.getElementById('message');


    if (userGuess == secretNumber) {
        messageElement.textContent = 'Parabéns! Você acertou!';
        messageElement.style.color = 'green';
    } else if (userGuess < secretNumber) {
        messageElement.textContent = 'Tente um número maior.';
        messageElement.style.color = 'red';
    } else {
        messageElement.textContent = 'Tente um número menor.';
        messageElement.style.color = 'red';
    }
}
