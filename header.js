let url = "https://icanhazdadjoke.com/slack";

async function getJokes() {
    try
    {const config = {headers : {Accept : "application/json"}}
    let res = await axios.get(url ,config);
    console.log(res.data.attachments[0].fallback);}
    catch(err){
        console.log("Error,",err.message);
    }
}