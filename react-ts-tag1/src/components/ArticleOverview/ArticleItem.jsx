import {Link} from 'react-router-dom'
export default function ArticleItem({ title, id }) {

    return <div className="articleItem">
        <h3>{title}</h3>
        <Link to={`/news/${id}`}>more...</Link>
    </div>
}
