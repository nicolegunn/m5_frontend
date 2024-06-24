import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";

export default function Home() {
    
    return (
        <div className={styles.homeContainer}>
            <img className={styles.homeImages} src="/images/Banner-image.png" alt="" />
            <img className={styles.homeImages} src="/images/power-your-home.png" alt="" />
            <img className={styles.homeImages} src="/images/what-you-need-made-easy.png" alt="" />
            <img className={styles.homeImages} src="/images/there-where-you.png" alt="" />
            <img className={styles.homeImages} src="/images/make-most.png" alt="" />
            <img className={styles.homeImages} src="/images/sharetank.png" alt="" />
            <Footer />
            
        </div>
    ); 
}
