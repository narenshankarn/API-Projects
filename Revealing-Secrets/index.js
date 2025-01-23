// HINTS:
import express from "express";
import axios from "axios";
import bodyParser from "body-parser"

const app = express();
const port = 3000;
const url = "https://secrets-api.appbrewery.com/random";

app.use(express.static("public"))

app.get("/", async (req, res) => {
    try{
        const response = await axios.get(url);
        res.render("index.ejs", {
            secret : response.data.secret,
            user : response.data.username
        })
    }
    catch(error) {
        res.sendStatus(500);
    }
})

app.listen(port, () => {
    console.log(`server started at port ${port}`);
})