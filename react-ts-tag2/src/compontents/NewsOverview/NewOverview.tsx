import { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import AddArticleForm from '../Forms/AddArticleForm';

const NewOverview = () => {

    const [articles, setArticles] =useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] =useState(false)

    useEffect(() => {
        setIsLoading(true)
        
        setTimeout(()=>{
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response => response.json())
                .then(data => {
                    setArticles(data)
                    setIsLoading(false)
                })
                .catch(err => {
                    console.log("error", err)
                    setIsError(true)
                })
        }, 2000)



        
    }, [])

    const ListOfArticles = articles.map((item:{title:string, id: string})=>{

        return <NewsItem key={item.id} title={item.title} id={item.id}/>
    })

    return (
        <>
            <AddArticleForm/>
            {isLoading ? <h4>is loading....</h4>: ListOfArticles}
            {isError && <h2>Irgendwas ist faul</h2>}
        </>
    )
}

export default NewOverview
