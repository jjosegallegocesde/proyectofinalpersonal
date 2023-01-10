//RECETA PARA CONSUMIR UN API CON REACT

export async function servicioCancionesTop(){

    //1. PA ONDE VAS Y A QUE VAS
    //ESCRIBIR LA URL DEL SERVICIO DEL API
    const URL="https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=US"

    //2. QUE OPERACION VAS A HACER EN LA BASE DE DATOS
    //CONFIGURAR LA PETICION DE ENVIO HACIA EL SERVIDOR
    const PETICION={
        method:"GET",
        headers:{Authorization:"Bearer BQCIVJy6N2Z9nEcoRhk8he9u4vcBT6Fbzviy5SS0CAuasT0L-aK2H2K9e7fOAlfsazMLmc3w6jWcUsT_QRFMUCsZiwCmxhTYlW5au57__3PXYFP86Ghc2A3psrfGswf6JtTz6_9sWe3c417-uz57olbv0AqjSBnZlGb6MpuVevu8rCfa1jtgGmo"}
    }

    //3. NOS VAMOS PAL  RESTAURANTE
    //CONSUMIMOS EL API
    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    console.log(canciones)


}