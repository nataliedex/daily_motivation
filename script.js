const quote = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote");
const saveQuoteButton = document.getElementById("save-quote");

const api_url = "https://zenquotes.io/api/quotes/";

async function getQuote(){
    try {
        const res = await fetch("https://zenquotes.io/api/today");
        const data = await res.json();
        console.log(data);
    } catch(err) {
        console.error(err);
    }
}

newQuoteButton.addEventListener("click", () => {
    console.log("clicking button");
    getQuote();
    
});

