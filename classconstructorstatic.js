//class
class User{
    constructor(username, email, password){
        this.username=username
        this.email=email
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    updateName(){
        return `${this.username.toUpperCase()}`
    }
}

const wasim=new User("Wasim","wasim@fb.com","123")
// console.log(wasim.encryptPassword())
// console.log(wasim.updateName())

// Inheritance
class user{
    constructor(userName){
        this.userName=userName
    }
    logMe(){
        console.log(`UserName is ${this.userName}`)
    }
}
class teacher extends user{
    constructor(userName, email, password){
        super(userName)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.userName}`)
    }
}
const ramiz=new teacher("Ramiz", "ramiz@gmail.com", 123456)
// ramiz.logMe()
// ramiz.addCourse()
const wali=new User("Mohd. Wali")
console.log(wasim instanceof user)

// Static Props
class anotherUser{
    constructor(userName){
        this.userName=userName
    }
    logMe(){
        console.log(`username ${this.userName}`)
    }
    static createId(){
        return `123`
    }
}

const tarun=new anotherUser("tarun")
// console.log(tarun.createId())

class anotherTeacher extends anotherUser{
    constructor(userName,email){
        super(userName)
        this.email=email
    }
}
const mahfuz=new anotherTeacher("Mahfuz Khan", "mahfuz@gmail.com")
// console.log(mahfuz.createId())