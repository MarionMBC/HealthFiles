import app from "./app.js";
import { SERVER_PORT } from "./env-config.js";
import express from "express";

/** 
 ** Inicializa el servidor
*/

app.use(express.json());


app.get('/', (req, res)=> {
    res.send('hola');
})

app.listen( 4000, ()=>{
    console.log("Servidor inicializado en el puerto", 4000);
});




