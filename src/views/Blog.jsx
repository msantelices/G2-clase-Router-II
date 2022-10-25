import Context from '../context/context.js'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Blog = ()=> {
    const { posts } = useContext(Context)
    const navigate = useNavigate()

    const leerPost = (id)=> navigate(`/post/${id}`)

    return (
        <main>
            {
                posts.map((post)=> {
                    return (
                        <article key={post.id}>
                            <h3>{ post.title }</h3>
                            <p>{ post.body }</p>

                            <button onClick={()=> leerPost(post.id)}>Leer</button>
                        </article>
                    )
                })
            }
        </main>
    )
}

export default Blog