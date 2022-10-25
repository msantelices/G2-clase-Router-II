import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './views/Home.jsx'
import Personajes from './views/Personajes.jsx'
import Personaje from './views/Personaje.jsx'

import Blog from './views/Blog.jsx'
import Post from './views/Post.jsx'

import { useState, useEffect } from 'react'
import Context from './context/context.js'

function App() {
  const [posts, setPosts] = useState([])
  const globalState = { posts }

  const endpoint = 'https://jsonplaceholder.typicode.com/posts'
  useEffect(()=> {
    fetch(endpoint)
      .then((res)=> res.json())
      .then((json)=> {
        setPosts(json.slice(0, 5))
      })
  }, [])


  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            {/* <Route path='/' element={ <Home /> }></Route>
            <Route path='/personajes' element={ <Personajes /> }></Route>
            <Route path='/personajes/:id' element={ <Personaje /> }></Route> */}
            <Route path='/' element={ <Blog /> }></Route>
            <Route path='/post/:id' element={ <Post /> }></Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App
