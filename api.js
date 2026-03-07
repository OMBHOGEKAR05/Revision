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

// fetch(url)
// .then((res)=>{
//     console.log(res);
//     //console.log(res.json());
//     res.json()
//     .then((data)=>{
//         console.log(data.fact);
//         console.log(data.length);
//     })
// })
// .catch((err)=>{
//     console.log("Error",err.message);
// })

//using async and await

// async function getFacts() {
//     try{
//         let res = await fetch(url);
//     let data = await res.json();
//     console.log("Data1 = ",data);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log("Data1 = ",data2);
// }
//     catch(err){
//         console.log("Error found");
//     }
//     console.log("Bye");
// }

// function getFacts(){
//     return axios.get(url);
//     //console.log(fact.json());
// }

// getFacts()
// .then((data)=>{
//     console.log(data.data.fact);
    
// })
// .catch((err)=>{
//     console.log("Error", err.message);
// })


let hello = async () => {
    try{let fact = await axios.get(url);
    console.log(fact.data);}
    catch(error){
        console.log(error.message);
    }
}