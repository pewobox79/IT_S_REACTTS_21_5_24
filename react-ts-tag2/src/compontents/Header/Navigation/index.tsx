

import { navigation } from '../../../store/navigation'
import NavItem from './NavItem'

export default function Navigation() {

  const NavList = navigation.map((item:{href: string, title:string, id: string})=>{
    return <NavItem key={item.id} href={item.href} title={item.title}/>
  })
  return (
    <nav>
      <ul>
        {NavList}
      </ul>
    </nav>
  )
}
