const apiurl = "https://api.quotable.io/quotes" ;
const text = document.getElementById("text");
const author = document.getElementById("author");
async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    author.innerHTML = data.author; 
    text.innerHTML = data.text;
}
getQuote(apiurl)