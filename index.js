const express= require("express");
const app= express();

//da error cannot get
app.get("/", (req, res)=>{
    res.send("Hola con express!!!");
})
const port= 3000;

app.listen(port, () => console.log(`http://localhost:${port}`));

