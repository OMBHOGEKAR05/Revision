let btn = document.querySelector("button");
let p = document.querySelector("p");
let url = "https://catfact.ninja/fact"

addEventListener("click",()=>{
    getFact();
})

async function getFact() {
        let fact = await axios.get(url);
        p.innerText = fact.data.fact;
    }