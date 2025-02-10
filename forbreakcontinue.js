for(let i=0; i<20; i++){
    const element =i
    if (element==5){
        // console.log("5 is best number")
    }
    // console.log(element)
}

for (let i=1; i<10; i++){
    // console.log(`Table of ${i}`)
    for(let j=1; j<10; j++){
        // console.log(`inner loop ${j}`)
        // console.log(`${i} * ${j}= `+ i*j)
    }
}

let myArray=["wasim","Akram","Khan"]
// console.log(myArray.length)
for( let i=0; i<myArray.length; i++){
    // console.log(myArray[i])
}

for(let i=1; i<=20; i++){
    if(i==5){
        console.log("detected 5")
        // break
        continue
    }
    console.log(i)
}