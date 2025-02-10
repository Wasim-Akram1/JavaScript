mySym=Symbol("key1")

const User={
    name:"Wasim",
    fullName:"Wasim Akram Khan",
    [mySym]:"Key1",
    age:23,
    location:"Friday Market Rehla",
    email:"wasim@gmail.com",
    isLoggedIn:"False",
    LastLoginDays:["Monday", "Tuesday"]
}

// console.log(User.fullName)
// console.log(User["location"])
// console.log(User[mySym])

// Object.freeze(User)
// User.email="Ramiz@gmail.com"
// console.log(User['email'])

// User.greeting=function(){
//     console.log("Hellow Founder")
// }

// User.greeting2=function(){
//     console.log(`Hello Founder ${this.fullName} Nice to meet you`)
// }
// console.log(User.greeting())
// console.log(User.greeting2())
