// const user={
//     username:"Wasim Akram",
//     loginCount:100,
//     signedIn:true,

//     getUserDetails:function(){
//         console.log("Got User Detail from Database")
//         console.log(`Usename: ${this.username}`)
//         console.log(this)
//     }
// }
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

function User(username,loginCount,isLoggedIn){
    this.username
    this.loginCount
    this.isLoggedIn

    this.greeting=function(){
        console.log(`Welcome Sir ${this.username}`)
    }
    return this
}
const userOne=new User("Wasim Akram",12,true)
const userTwo=new User("Ramiz Khan",18,false)
console.log(userOne)
console.log(userTwo)