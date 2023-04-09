import app from "./app.js";
import { SERVER_PORT } from "./env-config.js";
import express from "express";
const PORT = 3000
/** 
 ** Inicializa el servidor
*/

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res)=> {

    res.send('hola');
})

app.listen( PORT, ()=>{
    console.log("Servidor inicializado en el puerto", PORT);
});




