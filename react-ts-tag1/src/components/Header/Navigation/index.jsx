import {navigation}  from "../../../store/navigation"
import NavItem from "./NavItem"

export default function Navigation() {

    const NavigationList = navigation.map((item)=>{
        return <NavItem 
        key={item.id} {...item} />
    })
    return <nav>
        <ul>
            {NavigationList}
        </ul>
    </nav>
}