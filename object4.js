const descriptor=Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)

// console.log(Math.PI)
// Math.PI=5
// console.log(Math.PI)

const wasim={
    name:"Wasim Akram",
    Rating:250,
    isAvailable:true,

    invite: function(){
        console.log("he is not coming")
    }
}
console.log(Object.getOwnPropertyDescriptor(wasim, "name"))

Object.defineProperty(wasim,'name',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(wasim,'name'))

for (let [key, value] of Object.entries(wasim)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
    
}