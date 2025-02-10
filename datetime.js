let date=new Date()
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toLocaleString())
// console.log(date.getMonth()+1)
// console.log(date.getDay())
console.log(date.toLocaleString('default',{
    weekday:"long",
}))

let myDate=new Date(2024,11,28)
// let myDate=new Date(2024,11,28,4,32)
// let myDate=new Date("2024-12-27")
// console.log(myDate.getTime())
// console.log(myDate)

let timeStamp=Date.now()
// console.log(timeStamp)
// console.log(Math.floor(Date.now()/1000))
