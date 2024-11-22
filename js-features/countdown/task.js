const timerStart = document.getElementById("timer");

const addText = () => {
  timerStart.textContent -= 1;

  if (timerStart.textContent <= 0) {
    clearInterval(timerInterval);
    alert("Вы победили в конкурсе!");
  }
};

if (timerStart.textContent > 0) {
  var timerInterval = setInterval(addText, 1000);
}
