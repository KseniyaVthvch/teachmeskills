const timerWrapper = document.getElementById("timer_wrapper")

const createElement = (tag, options) => {
   const elem = document.createElement(tag)
   Object.keys(options).forEach(item => {
      elem[item] = options[item]
   })
   return elem
}

const title = createElement("h1", {
   className: "timer_name",
   textContent: "Таймер"
})

let timer = createElement("div", {
   className: "timer"
})
let hour = createElement("div", {
   className: "hour",
   textContent: "00:"
})
let minutes = createElement("div", {
   className: "minutes",
   textContent: "00:"
})
let seconds = createElement("div", {
   className: "seconds",
   textContent: "00"
})
const buttons = createElement("div", {
   className: "timer_buttons"
})

timerWrapper.appendChild(title)
timerWrapper.appendChild(timer)
timerWrapper.appendChild(buttons)
timer.appendChild(hour)
timer.appendChild(minutes)
timer.appendChild(seconds)

const btnStart = createElement("div", {
   className: "btn",
   textContent: "Старт"
})
let second = 0
let min = 0
let hours = 0
let interval

const time = () => {
   second++
   if (second <= 9) {
      seconds.innerText = "0" + second
   }
   if (second > 9) {
      seconds.innerText = second
   }
   if (second > 59) {
      second = 0
      seconds.innerText = "00"
      min++
      minutes.innerText = "0" + min + ":"
   }
   if (min > 9) {
      minutes.innerText = min + ":"
   }
   if (min > 59) {
      second = 0
      seconds.innerText = "00"
      min = 0
      minutes.innerText = "00"
      hours++
      hour.innerText = "0" + hours + ":"
   }
   if (hours > 9) {
      hour.innerText = hours + ":"
   }
   if (hours > 23) {
      second = 0
      seconds.innerText = "00"
      min = 0
      minutes.innerText = "00"
      hours = 0
      hour.innerText = "00"
   }
}

btnStart.addEventListener("click", () => {
   interval = setInterval(time, 1000)
})

const btnStop = createElement("div", {
   className: "btn",
   textContent: "Стоп"
})

btnStop.addEventListener("click", () => {
   clearInterval(interval)
})

buttons.appendChild(btnStart)
buttons.appendChild(btnStop)