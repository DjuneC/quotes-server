import express from "express";

import quotes from "./data.js";

const app = express();

app.set("view engine", "ejs");

const PORT = process.env.PORT || 4000;


app.get("/", (req, res) => {
    res.render("index", { quotes })
})

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})