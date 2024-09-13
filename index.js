import express from "express";

import quotes from "./data.js";

const app = express();

const PORT = process.env.PORT || 4000;


app.get("/", (req, res) => {
    res.send(`<div>
                <h3>${quotes[0].quote}</h3>
                <h5>${quotes[0].author}</h5>
            </div>`);
})

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})