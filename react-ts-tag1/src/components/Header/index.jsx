import Navigation from "./Navigation";
import styles from '../../styles/Header.module.css'

const Header = () =>{

    return <header className={`${styles["header-wrapper"]} ${styles.border}`}>

        <h3>header</h3>
        <Navigation/>
    </header>
}



export default Header