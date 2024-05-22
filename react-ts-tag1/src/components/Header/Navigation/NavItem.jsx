import { NavLink } from "react-router-dom";
import './style.css'
export default function NavItem({ href, title }) {

    return (
        <NavLink to={href}
            className={({ isActive }) => isActive ? "active" : "not"}>
            <li>{title}</li>
        </NavLink>
    )
}
