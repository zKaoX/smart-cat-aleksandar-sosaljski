import { NavLink } from "react-router-dom";

function Navigation() {
    const activeStyle = {
        textDecoration: "underline",
        color: 'orange',
    };

    return (
        <nav>
            <ul>
                <li><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/products">Products</NavLink></li>
                <li><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/about">About</NavLink></li>
                <li><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/statistics">Statistics</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;