import Footer from "../components/Footer"
import Header from "../components/Header"
import SidebarLayout from "./SidebarLayout"
import { Outlet } from "react-router-dom"

const MainLayout = () => {

    return <SidebarLayout>
        <Header />
            <Outlet/>
            {/** OUTLET === children  */}
        <Footer />
    </SidebarLayout>
}

export default MainLayout