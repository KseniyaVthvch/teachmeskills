const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
let seconds = document.getElementsByClassName("sec")[0];
let minutes = document.getElementsByClassName("min")[0];

let id;
let minutesCount = 0;
let secondsCount = 0;

const render = () => {
  minutes.textContent = minutesCount;
  seconds.textContent = secondsCount;
}

render()

const setInt = function () {
  id = setInterval(() => {

    secondsCount += 1;

    if (secondsCount === 60) {
      secondsCount = 0;
      minutesCount += 1;
    }

    render();
  }, 1000)
}

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  setInt();
})


stopBtn.addEventListener("click", () => {
  clearInterval(id);
  startBtn.disabled = false;
})
