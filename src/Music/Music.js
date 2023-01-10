import { servicioCancionesTop } from "../services/servicioCanciones"

export function Music(){

    servicioCancionesTop()

    return(
        <>
            <h1>Musica de la banda</h1>
        </>
    )

}