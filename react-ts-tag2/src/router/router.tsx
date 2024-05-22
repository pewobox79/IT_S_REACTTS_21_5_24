import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import NewsPage from "../pages/NewsPage";
import SingleNewsPage from "../pages/SingleNewsPage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Homepage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            
            <Route path="news">
                <Route index element={<NewsPage/>}/>
                <Route path=":id" element={<SingleNewsPage/>}/>
            </Route>
        </Route>
    )
)