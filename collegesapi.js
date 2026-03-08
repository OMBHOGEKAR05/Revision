let int = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let url = "http://universities.hipolabs.com/search?name=";


//console.log(country);


async function getColleges() {
    let country = int.value;

    let res = await axios.get(url+country);
    console.log(res.data.length);

    let items = res.data.length;
    ul.innerText = "";

    for (let i = 0; i < items; i++) {
        let li = document.createElement("li");
        ul.insertAdjacentElement("afterbegin",li);
        li.innerText = "";
        li.innerText = res.data[i].name;
    }
}

btn.addEventListener("click",()=>{
    getColleges();
})