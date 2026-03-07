// let h1 = document.querySelector("h1");

// function changeColor(color ,delay ,nextColor){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColor){
//             nextColor();
//         }
//     },delay)

// }

// changeColor("red" , 1000 , ()=>{
//     changeColor("blue",1000 ,()=>{
//         changeColor("orange",1000)
//     })
// })


// function saveToDb(data, success, failure){
//     let network = Math.floor(Math.random() * 10) + 1;
//     if(network > 4){
//         success();
//     }else{
//         failure();
//     }
// }


// saveToDb("ApnaCollege", ()=>{
//     console.log("Your data was saved...");
//     saveToDb("hello world!!" , ()=>{
//         console.log("Your data was saved...");
//     } ,
//     ()=>{
//         console.log("Weak connection, Try later");
//     })
// }, ()=>{
//     console.log("Weak connection, Try later");
// })


// function saveToDb(data){
//     return new Promise((resolve, reject)=>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve("Successful");
//         }else{
//             reject("Failed");
//         }
//     })
// }



let h1 = document.querySelector("h1");

function changecolor(color){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve(color);
        },1000)
    })
}

changecolor("Red")
.then((color)=>{
    console.log("Colour changed to ,",color);
    return changecolor("blue")
})
.then((color)=>{
    console.log("Colour changed to ,",color);
    return changecolor("Orange")
})
.then((color)=>{
    console.log("Colour changed to ,",color);
})
.catch(()=>{
    console.log("Colours are finished!");
})

