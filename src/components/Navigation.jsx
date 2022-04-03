import { NavLink } from "react-router-dom";

function Navigation() {
    const activeStyle = {
        textDecoration: "underline",
        color: 'orange',
    };

    return (
        <nav>
            <ul className='navigation'>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/statistics">Statistics</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;