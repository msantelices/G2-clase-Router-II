import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Personajes = ()=> {
    const [id, setId] = useState('')
    const navigate = useNavigate()

    const buscar = ()=> {
        if(!id) return

        navigate(`/personajes/${id}`)
        // navigate(`/`)

    }

    return (
        <main>
            <h1>Personajes</h1>

            <input type="text" placeholder="Ingresa un ID" onChange={(e)=> setId(e.target.value)} />
            <button onClick={()=> buscar()}>Buscar</button>
        </main>
    )
}

export default Personajes