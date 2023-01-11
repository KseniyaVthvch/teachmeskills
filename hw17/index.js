class Developer {
	constructor(name) {
		this.name = name
	}
	startWork() {
		console.log(this.name, "start work")
	}
	endWork() {
		console.log(this.name, "end work")
	}
}

class Frontend extends Developer {
	constructor(name, websiteName) {
		super(name)
		this.websiteName = websiteName
	}
	buildWebsite() {
		console.log(this.name, "start build website", this.websiteName)
	}
}
class Backend extends Developer {
	buildServer() {
		console.log(this.name, "start build server")
	}
}

const john = new Frontend('john', `Google`);
john.startWork()
john.buildWebsite()
john.endWork()

const jack = new Backend('jack');
jack.startWork()
jack.buildServer()
jack.endWork()