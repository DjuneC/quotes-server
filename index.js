import express from "express";

import quotes from "./data.js";

const app = express();

app.set("view engine", "ejs");

const PORT = process.env.PORT || 4000;

const getRandomQuote = (quotes) => {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

app.get("/", (req, res) => {
    const quote = getRandomQuote(quotes);
    res.render("index", { quote })
})

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})