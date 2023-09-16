/* var addDays = require('date-fns/addDays')

const newDate = addDays(new Date("2023-08-20"),5)
console.log(newDate)

const todayDate = new Date();
console.log(todayDate); */

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/",(request,response)=>{
    response.send("Hello Anki");
})
app.listen(3009,()=>{
    console.log("server is running at 3009 port")
});

