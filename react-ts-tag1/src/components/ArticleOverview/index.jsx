import { articles } from "../../store/articles"
import ArticleItem from "./ArticleItem"
import './article.css'


export default function ArticleOverview() {

    console.log("articles", articles)

    const ListOfArticles = articles.map((article) => {
        return <ArticleItem
            key={article.id}
            title={article.title}
            id={article.id} />

    })

    console.log("liste", ListOfArticles)

    return (
        <div>
            {ListOfArticles}
        </div>
    )
}
