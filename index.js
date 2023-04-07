import app from "./app.js";
import { SERVER_PORT } from "./src/env-config.js";


/** 
 ** Inicializa el servidor
*/

app.get('/a', (req, res)=> {
    res.send('<h1>Hola, mundo!</h1>');
})

app.listen( 4000, ()=>{
    console.log("Servidor inicializado en el puerto", 4000);
});

