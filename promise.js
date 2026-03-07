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


function saveToDb(data, success, failure){
    let network = Math.floor(Math.random() * 10) + 1;
    if(network > 4){
        success();
    }else{
        failure();
    }
}


saveToDb("ApnaCollege", ()=>{
    console.log("Your data was saved...");
    saveToDb("hello world!!" , ()=>{
        console.log("Your data was saved...");
    } ,
    ()=>{
        console.log("Weak connection, Try later");
    })
}, ()=>{
    console.log("Weak connection, Try later");
})
