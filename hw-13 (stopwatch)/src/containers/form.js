import { createElem } from "../utils/createElement.js";
import { createBtn } from "../controls/createBtn.js";
import { lessThenTen } from "../utils/lessThanTenFunction.js";

const timeArr = [0, 0, 0, 0]
let counter = 0

const stopwatchFunc = () => {
	if (timeArr[0] === 100) {
		timeArr[1]++
		timeArr[0] = 0
	}

	if (timeArr[1] === 60) {
		timeArr[2]++
		timeArr[1] = 0
	}

	if (timeArr[2] === 60) {
		timeArr[3]++
		timeArr[2] = 0
	} 

	if (timeArr[3] > 0) {
		time.textContent = `${lessThenTen(timeArr[3])}:${lessThenTen(timeArr[2])}:${lessThenTen(timeArr[1])}:${lessThenTen(timeArr[0])}`
	} else {
		time.textContent = `${lessThenTen(timeArr[2])}:${lessThenTen(timeArr[1])}:${lessThenTen(timeArr[0])}`
	}

	timeArr[0]++
	sessionStorage.setItem("time", JSON.stringify(timeArr))
}

if(sessionStorage.getItem("time") === null) {
	sessionStorage.setItem("time", JSON.stringify(timeArr))
}

const root = document.getElementById("root")

//

const stopwatch = createElem("div", {
	className: "stopwatch"
}, root)

//

const timeWrapper = createElem("div", {
	className: "stopwatch__time-wrapper"
}, stopwatch)

const controlsWrapper = createElem("div", {
	className: "stopwatch__controls-wrapper"
}, stopwatch)

const timeText = createElem("p", {
	textContent: "Текущее время",
	className: "stopwatch__time-text",
}, timeWrapper)

const pointsWrapper = createElem("div", {
	className: "stopwatch__points-wrapper"
}, timeWrapper)

//

const time = createElem("div", {
	className: "stopwatch__time",
	textContent: `${lessThenTen(timeArr[2])}:${lessThenTen(timeArr[1])}:${lessThenTen(timeArr[0])}`
}, timeWrapper) 

const startBtn = createBtn("Start", "stopwatch__play-btn btn", controlsWrapper, "click", () => {

	startBtn.hidden = true

	let stopwatchId = setInterval(stopwatchFunc, 10)

	const pauseBtn = createBtn("Pause", "stopwatch__pause-btn btn", controlsWrapper, "click", () => {
		clearInterval(stopwatchId)
		pauseBtn.hidden = true
		intervalBtn.hidden = true
		
		const continueBtn = createBtn("Continue", "stopwatch__continue-btn btn", controlsWrapper, "click", (e) => {
			stopBtn.hidden = true
			continueBtn.hidden = true
			pauseBtn.hidden = false
			intervalBtn.hidden = false

			stopwatchId = setInterval(stopwatchFunc, 10)
		})
		
		const stopBtn = createBtn("Stop", "stopwatch__stop-btn btn", controlsWrapper, "click", () => {
			stopBtn.hidden = true
			continueBtn.hidden = true
			startBtn.hidden = false
			for (let i = 0; i < timeArr.length; i++) {
				timeArr.splice(i,1,0)
			}

			time.textContent = `${lessThenTen(timeArr[2])}:${lessThenTen(timeArr[1])}:${lessThenTen(timeArr[0])}`
			sessionStorage.setItem("time", JSON.stringify(timeArr))
		})
	})


	const intervalBtn = createBtn("Point", "stopwatch__point-btn btn", controlsWrapper, "click", () => {
		time.style.left = '100px'
		time.style.top = '40px'
		time.style.fontSize = '35px'
		timeText.style.display = "block"

		const pointWrapper = createElem("div", {
			className: "stopwatch__point"
		}, pointsWrapper)

		const pointNum = createElem("p", {
			textContent: lessThenTen(++counter)
		}, pointWrapper)
	})

})
