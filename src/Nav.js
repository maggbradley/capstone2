import {NavLink} from "react-router-dom";
function Nav(){
    return(
        <>
            <nav className="style3">
                <ul id ="navbar" >
                    <li id="linkstyle"><NavLink to="/">Home</NavLink></li>
                    <li id="linkstyle"><NavLink to="/about">About</NavLink></li>
                    <li id="linkstyle"><NavLink to="/reservations">Reservations</NavLink></li>
                    <li id="linkstyle"><NavLink to="/menu">Menu</NavLink></li>
                    <li id="linkstyle"><NavLink to="order-online">Order Online</NavLink></li>
                </ul>
            </nav>
            </>

    )
}

export default Nav;