const user={
    userName:"Wasim Akram",
    role:-"JavaScript",
    welcomeMessage:function(){
        console.log(`${this.userName}, welcome sir`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.userName="Sama"
// user.welcomeMessage()
// console.log(this)

function dress(){
    let userName="Sama"
    console.log(this.userName)
}
// dress()

const dress1=()=>{
    let username="Sama"
    console.log(this)
}
// dress1()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// const addTwo=(num1,num2)=>num1+num2
// const addTwo=(num1,num2)=>(num1+num2)
const addTwo=(num1,num2)=>({username:"Sama"})
// console.log(addTwo(19,18))




