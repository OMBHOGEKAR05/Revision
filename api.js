let url = "https://catfact.ninja/fact"

// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("Data1 : ",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("Data2 :",data.fact);
// })
// .catch((err)=>{
//     console.log(err);
//     console.log("Error : 404 page not found");
// })

fetch(url)
.then((res)=>{
    console.log(res);
    //console.log(res.json());
    res.json()
    .then((data)=>{
        console.log(data.fact);
        console.log(data.length);
    })
})
.catch((err)=>{
    console.log("Error",err.message);
})