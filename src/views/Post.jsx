import { useParams, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import Context from '../context/context.js'

const Post = ()=> {
    const { id } = useParams()
    const { posts } = useContext(Context)
    const [contenido, setContenido] = useState({})
    const navigate = useNavigate()

    useEffect(()=> {
        if(posts.length == 0) {
            navigate('/')
        }

        const contenido = posts.filter((post)=> post.id == id)
        setContenido(contenido[0])
    }, [])

    return (
        <main>
            <article>
                <h1>{ contenido.title }</h1>
                <p>{ contenido.body }</p>
            </article>
        </main>
    )
}

export default Post