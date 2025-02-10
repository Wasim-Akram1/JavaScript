const tinderUser={}
tinderUser.id="0133"
tinderUser.name="Wasim Akram"
tinderUser.isLoggedIn=false
// console.log(tinderUser)

const regularUser={
    email:"wasimak@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Wasim",
            lastName:"Akram"
        }
    }
}
// console.log(regularUser.fullName.userFullName.lastName)

const obj={a:1, b:2}
const obj2={c:3,d:4}
const obj3={e:5,f:6}
// const obj4={obj,obj2}
// console.log(obj4)
// const obj4=Object.assign({},obj,obj2,obj3)
// console.log(obj4)
const obj4={...obj, ...obj2}
// console.log(obj4)

const users=[
    {
        id:1,
        email:"wasim@gmail.com"
    },
    {
        id:2,
        email:"akram@gmail.com"
    },
    {
        id:3,
        email:"ramiz@gmail.com"
    }
]
// console.log(users[2].email)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
