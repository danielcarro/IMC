import styles from './styles.module.css'
import powerImage from '../../assets/powered.png';

export const Header = () => {
    return (
        <header>
            <div className={styles.headerContainer}>
                <img src={powerImage} alt="" />
            </div>
        </header>
    );
}