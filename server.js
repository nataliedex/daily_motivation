import express from "express";
import path from "path";
import fetch from "node-fetch";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))

});

app.get("/quote", async (req, res) => {
    try{
        const response = await fetch("https://zenquotes.io/api/quotes/");
        const data = await response.json();
        res.json(data);

    } catch(err) {
        res.status(500).json({ error: "Failed to fetch quote" });
    }
});




app.listen(PORT || 8000, () => {
    console.log(`Server is curring running on port: ${PORT || 8000}`);
});