const express = require("express")
const app = express()
const date = new Date()
console.log("Hour is: ",date.getHours())
console.log("test1: ",date.getHours() < 8)
console.log("test2: ",date.getHours() > 17)
date.getHours() < 8 || date.getHours() > 17
  ? app.get("/public/home.html", (req, res) => {
    console.log("yes here")
      res.send("this is not a working time go have some fun !!!")
    })
  : app.use(express.static(__dirname))
app.listen(4000, err => {
  err ? console.log(err) : console.log("server is running in 4000 port")
})