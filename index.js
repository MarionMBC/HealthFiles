import app from "./src/app.js";
import { SERVER_PORT } from "./src/env-config.js";
import express from "express";
import bodyParse from "body-parser";
const PORT = 3000
/** 
 ** Inicializa el servidor
*/

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParse.json());

app.get('/', (req, res)=> {

    res.send('hola');
})

app.listen( PORT, ()=>{
    console.log("Servidor inicializado en el puerto", PORT);
});




