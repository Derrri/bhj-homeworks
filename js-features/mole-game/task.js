(() => {
  let deadCount = 0,
    lostCount = 0;

  const deadElement = document.getElementById("dead");
  const lostElement = document.getElementById("lost");

  const updateScores = () => {
    deadElement.textContent = deadCount;
    lostElement.textContent = lostCount;
  };

  const stop = () => {
    deadCount = 0;
    lostCount = 0;
    updateScores();
  };

  const getHole = (index) => document.getElementById(`hole${index}`);

  for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener("click", () => {
      if (getHole(i).classList.contains("hole_has-mole")) {
        deadCount++;
      } else {
        lostCount++;
      }
      updateScores();

      if (deadCount === 10) {
        stop();
        alert("Победа!");
      } else if (lostCount === 5) {
        stop();
        alert("Вы проиграли!");
      }
    });
  }
})();
