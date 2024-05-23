import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { DataContext } from "../store/context/dataContext";

export default function ProtectedRouteLayout() {

    const dataContext = useContext(DataContext)

    if(dataContext.user.fired){

        return <Navigate to={"/login"} replace/>

    }

    return <Outlet />
}
