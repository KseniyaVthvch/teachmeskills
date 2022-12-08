import "./src/app.js"

console.log(this)

const obj = {
    name: "Name",
    getPosition: function () {
        console.log(this.name)
    }
}

obj.getPosition()