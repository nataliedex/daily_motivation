const quote = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote");
const saveQuoteButton = document.getElementById("save-quote");
const favoriteList = document.getElementById("favorites-list");

let savedQuotes = [];

async function getQuote(){
    try {
        const res = await fetch("/quote");
        const data = await res.json();
        console.log(data);
        const randomQuoteInt = Math.floor(Math.random()*data.length);
        quote.textContent = `${data[randomQuoteInt].q} -${data[randomQuoteInt].a}`
    } catch(err) {
        console.error(err);
    }
}

async function displayFavorites(){
    favoriteList.innerHTML = "";

    savedQuotes.forEach((fav) => {
        const favQuote = document.createElement("li");
        favQuote.textContent = fav;
        favoriteList.appendChild(favQuote);
    });
}

async function saveQuote(){
    const currentQuote = quote.textContent;
    try {
        if(currentQuote && !savedQuotes.includes(currentQuote)){
            savedQuotes.push(currentQuote);
            displayFavorites();
        } else {
            console.log("Quote already saved.");
        }
    }catch(err){
        console.error(err);
    }
}

newQuoteButton.addEventListener("click", getQuote); 
saveQuoteButton.addEventListener("click", saveQuote);

