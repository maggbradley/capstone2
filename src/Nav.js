import {NavLink} from "react-router-dom";
function Nav(){
    return(
        <>
            <nav className="style3">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/reservations">Reservations</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="order-online">Order Online</NavLink>
                    </li>
                </ul>
            </nav>
            </>

    )
}

export default Nav;