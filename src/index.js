import app from "./app.js";
import { SERVER_PORT } from "./env-config.js";


/** 
 ** Inicializa el servidor
*/
app.listen(SERVER_PORT, ()=>{
    console.log("Servidor inicializado en el puerto", process.env.SERVER_PORT);
});

