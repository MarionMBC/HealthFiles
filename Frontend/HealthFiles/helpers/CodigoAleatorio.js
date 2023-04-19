export default function CodigoAleatorio(){
    var cadena = 'ABCDEFG1234567890';
    var codigo = '';
    for (let i=0; i<10; i++){
        codigo += cadena.charAt(Math.floor(Math.random()*cadena.length));
    }
    return cadena;
}