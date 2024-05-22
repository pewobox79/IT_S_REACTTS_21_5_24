import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function SingleArticle() {

    const { id } = useParams();
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`
    const [selectedArticle, setSelectedArticle] = useState({title: "", body:""})

    useEffect(() => {

        fetch(URL)
            .then(res => res.json())
            .then(data => setSelectedArticle(data))
    }, [URL])


    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{selectedArticle.title}</h1>
            <p>{selectedArticle.body}</p>
        </div>
    )
}
