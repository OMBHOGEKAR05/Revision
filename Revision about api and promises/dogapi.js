let btn = document.querySelector("button");
let img = document.querySelector("img");

let url = "https://dog.ceo/api/breeds/image/random";

async function getImg() {
    let IMG = await axios.get(url);
    let msg = IMG.data.message;
    img.setAttribute("src", msg);
}

btn.addEventListener("click",()=>{
    getImg();
})