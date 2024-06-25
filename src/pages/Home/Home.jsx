import styles from "./Home.module.css";

export default function Home() {
    
    return (
        <div className={styles.homeContainer}>
            <img className={styles.homeImagesDesktop} src="/images/Banner-image.png" alt="" />
            <img className={styles.homeImagesDesktop} src="/images/power-your-home.png" alt="" />
            <img className={styles.homeImagesDesktop} src="/images/what-you-need-made-easy.png" alt="" />
            <img className={styles.homeImagesDesktop} src="/images/there-where-you.png" alt="" />
            <img className={styles.homeImagesDesktop} src="/images/make-most.png" alt="" />
            <img className={styles.homeImagesDesktop} src="/images/sharetank.png" alt="" />

            <img className={styles.homeImagesMobile} src="/images/homeMobile/banner.png" alt="" />
            <img className={styles.homeImagesMobile} src="/images/homeMobile/z-for-new-zealand.png" alt="" />
            <img className={styles.homeImagesMobile} src="/images/homeMobile/powerHome.png" alt="" />
            <img className={styles.homeImagesMobile} src="/images/homeMobile/what-you-need.png" alt="" />
            <img className={styles.homeImagesMobile} src="/images/homeMobile/there-where-you-need-us.png" alt="" />
            <img className={styles.homeImagesMobile} src="/images/homeMobile/make-the-most-of-z.png" alt="" />
            <img className={styles.homeImagesMobile} src="/images/homeMobile/share-tank.png" alt="" />
            <img className={styles.homeImagesMobile} src="/images/homeMobile/sharetank.png" alt="" />


            
        </div>
    ); 
}
