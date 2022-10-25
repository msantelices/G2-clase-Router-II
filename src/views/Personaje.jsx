import { useParams } from "react-router-dom"

const Personaje = ()=> {
    const { id } = useParams()

    return (
        <main>
            <h1>Detalle personaje { id }</h1>
        </main>
    )
}

export default Personaje