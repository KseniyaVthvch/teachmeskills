

class Developer{
    constructor(name){
        this.name=name
    }
    startWork(){
        console.log(this.name, "is start working")
    }
    endWork(){
        console.log(this.name, "is finished work")
    }
}

class Frontend extends Developer {
    constructor(name,websiteName){
        super(name)
        this.websiteName=websiteName
    }
     get buildWebSite(){
        console.log (this.name, "working on",this.websiteName)
        return this._buildWebSite
    }
}

class Backend extends Developer{

    get buildServer(){
        console.log (this.name, "start building server")
        return this._buildServer
    }
}
const  veron  =  new Developer ("Veronika");
const  veroni  =  new Frontend ("Veronika","Space-X");
const  veronika  =  new Backend ("Veronika");
veron.startWork()
veron.endWork()
veroni.buildWebSite()
veronika.buildServer()
