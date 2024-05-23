import SingleArticle from "../compontents/SingleArticle";
import { useContext } from "react";
import { DataContext } from "../store/context/dataContext";

export default function SingleNewsPage() {

    const context = useContext(DataContext);
    console.log("context", context)

    return <SingleArticle /> 
    
}
