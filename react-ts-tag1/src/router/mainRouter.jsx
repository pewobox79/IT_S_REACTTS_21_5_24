import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom'

import Homepage from '../pages/Homepage'
import AboutUsPage from '../pages/AboutUsPage'
import MainLayout from '../layouts/MainLayout'
import ErrorPage from '../pages/ErrorPage'
import NewsPage from '../pages/NewsPage'
import SingleArticle from '../pages/SingleArticle'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Homepage/>}/>
            <Route path="aboutus" element={<AboutUsPage/>}/>
            <Route path="user" element={<h1>user element</h1>}/>
            
            <Route path="news">
                <Route index element={<NewsPage/>}/>
                <Route path=":id" element={<SingleArticle/>}/>
            </Route>
            
            <Route path="*" element={<ErrorPage/>}/>
        </Route>
    )
)