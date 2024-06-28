const express=require("express");
//creo la instania de router

const router = express.Router();

const productos= [
    {id:1, nombre:"uno"},
    {id:2, nombre:"dos"},
    {id:3, nombre:"tres"},
    {id:4, nombre:"cuatro"}

]

// "/" es la pagina principal,
// "/prod" se usa prefijo para no pisar el main
router.get("/", (req, res)=> {
    //no puede haber 2 res.send
  //  res.send("Listado de Productos");
    res.json(productos);
});


//PARA DEVOLVER UN PRODUCTO
router.get("/:id", (req, res)=> {
  //  res.send(req.params.id );
  //desestructuramos
    const {id}=req.params;
    //res.send(id);

    //buscar un producto
    const producto=productos.find((elemento)=>elemento.id==id)

    if(!producto){
        return res.status(404).json({error:"No está ese producto"})
    }
    res.send(producto);
});

//POST crea elementos
//NO FUNCIONA

router.post("/", (req, res)=>{
   // console.log(req.body);

    //esto lo haria la bd, es un ejemplo para que funcione
    //const id=productos[productos.length -1].id + 1;
    const id=productos.length +1;
    //crea el objeto
    const producto= {
        id: id,
        nombre: req.body.nombre

    };

    productos.push(producto);
    res.status(201).send(producto);
});

//patch es para parchar

//metodo put:PISA TODO
//usa misma ruta pero para modificarla

router.put("/:id", (req,res)=> {
    const {id}=req.params;
    const {nombre}=req.body;
//deberia andar
    res.json({id:id, nombre: nombre});
});


//delete
//SI FUNCIONA
router.delete("/:id", (req,res)=>{
    const {id}=req.params;
res.send(id);

//buscar elemento
const producto=productos.find((elemento)=>elemento.id ==id);
const productoIndex=productos.findIndex((elemento)=>elemento.id ==id);

//borra el elemento
productos.splice(productoIndex, 1);

res.send(producto);
});
module.exports=router;