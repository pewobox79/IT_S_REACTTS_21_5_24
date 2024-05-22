import styles from './NewsItem.module.css'
import { Link } from 'react-router-dom'

const NewsItem = ({title, id}:{title:string, id:string}) => {
    return (
        <div className={styles.newsItemWrapper}>
            <h3>{title}</h3>
            <Link to={`/news/${id}`} className={styles.moreButton}>read more...</Link>
        </div>
    )
}

export default NewsItem
