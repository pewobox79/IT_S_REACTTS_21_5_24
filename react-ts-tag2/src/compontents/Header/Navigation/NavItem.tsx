import { NavLink } from "react-router-dom"

export default function NavItem({href, title}:{href:string, title: string}) {
  return (
      <li><NavLink to={href}>{title}</NavLink></li>
  )
}
