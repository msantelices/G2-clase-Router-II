import { NavLink } from "react-router-dom"

const Navbar = ()=> {
    const setActiveClass = ({ isActive })=> isActive ? "active" : undefined

    return (
        <nav>
            <NavLink to='/' className={ setActiveClass } end>Home</NavLink>
            {/* <NavLink to='/personajes' className={ setActiveClass }>Personajes</NavLink>
            <NavLink to='/contacto' className={ setActiveClass }>Contacto</NavLink> */}
        </nav>
    )
}

export default Navbar