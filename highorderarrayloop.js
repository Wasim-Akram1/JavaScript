//for of 

const arr=[1,2,3,4,5]
for (const num of arr){
    // console.log(num)
}

const greeting="Good Evening Wasim"
for (const letter of greeting){
    // console.log(letter)
}

// Maps 

const map=new Map()
map.set('In',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")
map.set('UAE',"United Arab Emirates")
// console.log(map)
for (const [key,value] of map){
    // console.log(key,value)
}

// for in

const myObject={
    js:"JavaScript",
    py:"Python",
    rb:"Ruby",
    swift:"swift by apple"
}
for (const key in myObject){
    // console.log(myObject[key])
} 

const programming=["js","py","rb","java","cpp"]
for (const element in programming){
    // console.log(programming[element])
}

// for each

const coding=["js","py","rb","java","cpp"]
// coding.forEach(function(val){
//     console.log(val)
// })

// coding.forEach( (item)=>{
//     console.log(item)
// })


function printMe(item){
    console.log(item)
}
// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})

const myCoding=[
    {
        languageName:"JavaScript",
        languageFileName:"js",
    },
    {
        languageName:"Javat",
        languageFileName:"java",
    },
    {
        languageName:"python",
        languageFileName:"py",
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName)
})



