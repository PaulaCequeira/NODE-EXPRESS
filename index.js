const { Console } = require("console");
const express= require("express");
const app= express();

//agrego para usar router
//const productoRouter=require("./routes/products.router")
//app.use("/productos", productoRouter);

// otra forma, mas simple
app.use("/productos", require("./routes/products.router"));

const path=require("path");

//SE AGREGA PUBLIC MANERA SIMPLE
//app.use(express.static("public"));


//midlewares para archivos estaticos y publicos
app.use(express.static(path.join(__dirname ,"public")));
//para usar post
app.use(express.json());


//da error cannot get
app.get("/", (req, res)=>{
    res.send("Hola con express!!!");
})


//para pedir un archivo privado
app.get("/facturas", (req, res) => {
    //pedir login primero

    res.sendFile(path.join(__dirname, "private", "facturas.html"))
    
});

//enviar un json
app.get("/frutas", (req, res) => {
    //pedir login primero

    res.sendFile(path.join(__dirname, "frutas.json"));
    
});

//rutas parametrizadas
//para buscar un producto

app.get("/frutas/:id", (req, res) => {
console.log(req.params.id);
res.send("Una fruta");
});


//querys definidos en la ruta, para pedir datos
//directamente en la ruta se pone la query
//en la ruta:
//frutas?order=nombre&limit=5
app.get("/frutas", (req, res)=>{
    console.log(req.query);
    res.sendFile(path.join(__dirname, "frutas.json"));
});

const port= 3000;

app.listen(port, () => console.log(`http://localhost:${port}`));

