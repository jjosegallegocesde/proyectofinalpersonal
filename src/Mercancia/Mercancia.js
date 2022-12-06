import {Footer} from '../shared/Footer/Footer'

export function Mercancia(){

    let titulo="Productos de la banda..."

    let productos=[
        {
            nombre:"Camiseta original gira colombiana",
            foto:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/producto1.jpg?alt=media&token=6b01ba87-63ea-4fd5-a411-5bc7160623ef",
            precio:40

        },
        { 
            nombre:"LP Original disco morning sessions",
            foto:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/producto2.jpg?alt=media&token=808ac1ff-fa31-4d76-886f-7f3f0befea97",
            precio:90
        },
        {
            nombre:"Mascota INCUBUS",
            foto:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/producto4.jpg?alt=media&token=41afe26a-bab9-48b9-bb68-c28425d6e544",
            precio:25
        }
    ]


    return(
        <>
            <h1>{titulo}</h1>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-3 g-5">

                    {
                       productos.map(function(producto){
                        return(
                            <>
                                <div class="col">
                                    
                                    <div class="card h-100 shadow">

                                        <img src={producto.foto} alt="foto" class="h-100 img-fluid w-100" />


                                    </div>

                                </div>
                            </>
                        )
                       }) 
                    }

                </div>
            </div>
            <Footer/>

        </>
    )
}