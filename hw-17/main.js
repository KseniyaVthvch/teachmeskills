class Developer {
	constructor (name) {
		this.name = name
	}

	startWork() {
		return `${this.name} start work ...`
	}

	endWork() {
		return `${this.name} end work ...`
	}
}

class Frontend extends Developer {
	constructor(name, websiteName) {
		super(name)
		this.websiteName = websiteName
	}

	buildWebSite() {
		return `${this.name} start build website ${this.websiteName}`
	}
}

class Backend extends Developer {
	buildServer() {
		return `${this.name} start build server`
	}
}

const a = new Frontend("Даниил", "Wildberries")

console.log(a.startWork())
console.log(a.buildWebSite())
console.log(a.endWork())

const b = new Backend("Олег")

console.log(b.startWork())
console.log(b.buildServer())
console.log(b.endWork())