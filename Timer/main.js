const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const buttonStart = document.querySelector('.start')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
let hrs = 0
let min = 0
let sec = 0
let interval

const timer = () => {
	sec++
	if (sec <= 9) {
		seconds.innerText = "0" + sec
	}
	if (sec > 9) {
		seconds.innerText = sec
	}
	if (sec > 59) {
		min++
		minutes.innerText = '0' + min
		sec = '00'
		seconds.innerText = sec
	}
	if (min <= 9) {
		minutes.innerText = "0" + min
	}
	if (min > 9) {
		minutes.innerText = min
	}
	if (min > 59) {
		hrs++
		hours.innerText = '0' + hrs
		min = '00'
		minutes.innerText = min
		sec = '00'
		seconds.innerText = sec
	}
	if (hrs <= 9) {
		hours.innerText = "0" + hrs
	}
	if (hrs > 9) {
		hours.innerText = hrs
	}
	if (hrs > 23) {
		sec = 0
		min = 0
		hrs = 0
	}
}

buttonStart.addEventListener("click", () => {
	interval = setInterval(timer, 1000)
})
buttonPause.addEventListener("click", () => {
	clearInterval(interval)
})
buttonStop.addEventListener("click", () => {
	clearInterval(interval)
	sec = 0
	min = 0
	hrs = 0
	seconds.innerText = "0" + sec
	minutes.innerText = '0' + min
	minutes.innerText = '0' + hrs
})


