class Developer {
   constructor(name) {
      this.name = name
   }
   startWork() {
      console.log(this.name + ' start work in Apple')
   }
   endWork() {
      console.log(this.name + ' end work in EPAM')
   }
}
class FrontEnd extends Developer {
   constructor(name, websiteName) {
      super(name)
      this.websiteName = websiteName
   }
   buildWebSite() {
      console.log(this.name + ' start build website ' + this.websiteName)
   }
}
class Backend extends Developer {
   constructor(name) {
      super(name)
   }
   buildServer() {
      console.log(this.name + ' start build server')
   }
}


const devName = new Developer('Alexandra')
const fronEndDev = new FrontEnd('Alexandra', 'Amazon')
const backEndDev = new Backend('Alexandra')
devName.startWork()
devName.endWork()
fronEndDev.buildWebSite()
backEndDev.buildServer()
