import { useParams } from 'react-router-dom';
import { articles } from '../store/articles';

export default function SingleArticle() {

    const { id } = useParams();

    const selectedArticle = articles.find((item)=> item.id === id)

    return <div>
        <h1>{selectedArticle.title}</h1>
        <p>{selectedArticle.body}</p>
    </div>
}
