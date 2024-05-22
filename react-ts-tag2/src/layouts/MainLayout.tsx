
import Header from '../compontents/Header'
import Footer from '../compontents/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <><Header />
    <div style={{minHeight: "500px", height: "auto"}}>
        <Outlet />
    </div>
      
      <Footer />
    </>
  )
}
