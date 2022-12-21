import { createElem } from "../utils/createElement.js";
import { createBtn } from "../controls/createBtn.js";
import { lessThenTen } from "../utils/lessThanTenFunction.js";

// Arr

const timeArr = [0, 0, 0, 0]
const timeStepArr = [0, 0, 0, 0]

let counter = 0

// Functions

const checkHours = (elem, arr, option) => {
	if (arr[3] > 0) {
		elem.textContent = option + `${lessThenTen(arr[3])}:${lessThenTen(arr[2])}:${lessThenTen(arr[1])}:${lessThenTen(arr[0])}`

	} else {
		elem.textContent = option +  `${lessThenTen(arr[2])}:${lessThenTen(arr[1])}:${lessThenTen(arr[0])}`
	}
}

const stopwatchFunc = (arr, func) => {
	arr[0]++
	if (arr[0] === 100) {
		arr[1]++
		arr[0] = 0
	}

	if (arr[1] === 60) {
		arr[2]++
		arr[1] = 0
	}

	if (arr[2] === 60) {
		arr[3]++
		arr[2] = 0
	} 

	func
}

if(sessionStorage.getItem("time") === null) {
	sessionStorage.setItem("time", JSON.stringify(timeArr))
}

// Create

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

// START 

const startBtn = createBtn("Start", "stopwatch__play-btn btn", controlsWrapper, "click", () => {

	startBtn.hidden = true

	let pointId = setInterval(() => {
		stopwatchFunc(timeStepArr)
	}, 10)
	

	let stopwatchId = setInterval(() => {
		stopwatchFunc(timeArr, checkHours(time, timeArr, ""))
		sessionStorage.setItem("time", JSON.stringify(timeArr))
	}, 10)

	// PAUSE

	const pauseBtn = createBtn("Pause", "stopwatch__pause-btn btn", controlsWrapper, "click", () => {
		clearInterval(stopwatchId)
		clearInterval(pointId)
		pauseBtn.hidden = true
		intervalBtn.hidden = true
		
		// CONTINUE

		const continueBtn = createBtn("Continue", "stopwatch__continue-btn btn", controlsWrapper, "click", (e) => {
			stopBtn.hidden = true
			continueBtn.hidden = true
			pauseBtn.hidden = false
			intervalBtn.hidden = false

			pointId = setInterval(() => {
				stopwatchFunc(timeStepArr)
			}, 10)
			
			stopwatchId = setInterval(() => {
				stopwatchFunc(timeArr, checkHours(time, timeArr, ""))
				sessionStorage.setItem("time", JSON.stringify(timeArr))
			}, 10)
		})
		
		// STOP

		const stopBtn = createBtn("Stop", "stopwatch__stop-btn btn", controlsWrapper, "click", () => {
			stopBtn.hidden = true
			continueBtn.hidden = true
			startBtn.hidden = false

			for (let i = 0; i < timeArr.length; i++) {
				timeArr.splice(i,1,0)
				timeStepArr.splice(i,1,0)
			}

			for (let item of document.querySelectorAll(".stopwatch__point")) {
				item.remove()
			}
			timeText.style.display = "none"
			time.style.left = ''
			time.style.top = ''
			time.style.fontSize = ''
			time.style.transform = ''
			counter = 0

			time.textContent = `${lessThenTen(timeArr[2])}:${lessThenTen(timeArr[1])}:${lessThenTen(timeArr[0])}`
			sessionStorage.setItem("time", JSON.stringify(timeArr))
		})
	})

	// POINT

	const intervalBtn = createBtn("Point", "stopwatch__point-btn btn", controlsWrapper, "click", () => {
		time.style.left = '32px'
		time.style.top = '40px'
		time.style.fontSize = '35px'
		time.style.transform = 'translate(0, -50%)'

		timeText.style.display = "block"

		const pointWrapper = createElem("div", {
			className: "stopwatch__point"
		}, pointsWrapper)

		const pointNum = createElem("p", {
			textContent: lessThenTen(++counter)
		}, pointWrapper)

		const timeStep = createElem("p", {}, pointWrapper)
		checkHours(timeStep, timeStepArr, "+ ")

		const currentTime = createElem("p", {
			textContent: `${lessThenTen(timeArr[3])}:${lessThenTen(timeArr[2])}:${lessThenTen(timeArr[1])}:${lessThenTen(timeArr[0])}`
		}, pointWrapper)

		for (let i = 0; i < timeStepArr.length; i++) {
			timeStepArr.splice(i,1,0)
		}
	})

})
