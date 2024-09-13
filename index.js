import express from "express";

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("My personal quotes!");
    
})

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})