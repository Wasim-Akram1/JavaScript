// // // const coding=["js","ruby","java","python","cpp"]
// // // const values=coding.forEach( (item)=>{
// // //     // console.log(item)
// // //     // return item
// // // })

// // // filters 
// // const myNums=[1,2,3,4,5,6,7,8,9,0]
// // const newNums=myNums.filter( (num)=>{
// //     return num>4
// // })
// // // console.log(newNums)

// // const books = [
// //     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
// //     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
// //     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
// //     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
// //     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
// //     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
// //     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
// //     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
// //     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// //   ];

// // let userBooks=books.filter( (bk)=> bk.genre==='History')
// // // console.log(userBooks)
// // userBooks=books.filter( (bk)=>{
// //     return bk.publish>=1995 && bk.genre==='History'
// // })
// // // console.log(userBooks)

// // Map

// const myNumbers=[1,2,3,4,5,6,7,8,9,0]
// // const newNums=myNumbers.map( (num)=> {return num+10})
// // console.log(newNums)

// const newNums=myNumbers.map( (num)=> num*10).map( (num)=>num+1).filter( (num)=> num>=40)
// // console.log(newNums)

// // reduce

const myNums=[1,2,3]
// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc ${acc} currval ${currval}`)
//     // return acc+currval
// },0)

const myTotal=myNums.reduce( (acc,curr)=>acc+curr,0)
// console.log(myTotal)

const shoppingCart=[
    {
        itemName:'Js Course',
        price: 999,
    },
    {
        itemName:'Python Course',
        price: 599,
    },
    {
        itemName:'Web Dev ',
        price: 1299,
    },
    {
        itemName:'Data Scientist',
        price: 2299,
    },
]
const Total=shoppingCart.reduce( (acc,item)=>acc+item.price,0)
console.log(Total)