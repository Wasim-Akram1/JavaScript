function multiplyBy5(num){
    return num*5
}
multiplyBy5.power=2
// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

function createUser(username, score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
}

createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`)
}
const tarun=new createUser("tarun", 23)
const wasim= new createUser("wasim",23)
// wasim.printMe()

let myName="Wasim Akram"
let myProfession="React Developer"
// console.log(myName.trueLength)

let myHeros=["thor","spideman"]
let heroPower={
    thor:"Hameer",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`The power of spider is ${this.spiderman}`)
    }
}

Object.prototype.wasim=function(){
    console.log("wasim is present in all object")
}

Array.prototype.newWasim=function(){
    console.log("This is the new Array Object")
}
// heroPower.wasim()
// myHeros.wasim()
myHeros.newWasim()

//inheritance
const User={
    name:"Wasim",
    email:"wasimakramk60@gmail.com"
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'Js assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

Object.setPrototypeOf(TeachingSupport,Teacher)
let anotherUsername="wasim akram"

String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`${this.trim().length}`)
}
anotherUsername.trueLength()
"wasimAkram".trueLength()
"Tarun Singh".trueLength()

