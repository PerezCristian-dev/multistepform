

const express = require('express');
const cors = require("cors");

const {dbConnection} = require("./database/config")

const app = express();

dbConnection();

app.use(cors());

app.use(express.static("public"));

app.use(express.json());;


app.use("/", require("./routers/events"))



app.listen(3000, ()=>{
    console.log("server runninng")
})
