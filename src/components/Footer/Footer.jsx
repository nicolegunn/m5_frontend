import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.innerContainer}>
        <img className={styles.zLogo} src="/images/Z-logo.png" alt="" />
        <ul className={styles.footerList}>
          <li className={styles.listHeader}>Products and services</li>
          <li className={styles.listContent}>At the station</li>
          <li className={styles.listContent}>Z App</li>
          <li className={styles.listContent}>Power you home with Z</li>
          <li className={styles.listContent}>Rewards and promotions</li>
        </ul>
        <ul className={styles.footerList}>
          <li className={styles.listHeader}>For businesses</li>
          <li className={styles.listContent}>Z Business fuel card</li>
          <li className={styles.listContent}>Fuels and services</li>
          <li className={styles.listContent}>Business tips and stories</li>
        </ul>
        <ul className={styles.footerList}>
          <li className={styles.listHeader}>Sustainability</li>
          <li className={styles.listContent}>Our sustainability goals</li>
          <li className={styles.listContent}>Nature restoration</li>
          <li className={styles.listContent}>Supplier Code of Conduct</li>
          <li className={styles.listContent}>Supporting electric vehicles</li>
        </ul>
        <ul className={styles.footerList}>
          <li className={styles.listHeader}>About Z</li>
          <li className={styles.listContent}>Our story</li>
          <li className={styles.listContent}>What we stand for</li>
          <li className={styles.listContent}>Our people</li>
          <li className={styles.listContent}>News</li>
          <li className={styles.listContent}>Careers at Z</li>
          <li className={styles.listContent}>Corporate centre</li>
              </ul>
           <div className={styles.rightSideContainer}>
                  <img src="/images/footerImages/contactUs.png" alt="" />
                  <img className={styles.socialIcons}  src="/images/footerImages/socialMedia.png" alt="" />
          </div>   

          </div>          
          
      <div className={styles.dividerLine}></div>
      <div className={styles.lowerFooterContainer}>
        <ul className={styles.infoLinks}>
          <li>Privacy</li>
          <li>Terms of use</li>
          <li>Fuel Safety Data Sheets</li>
          <li>Investor relations</li>
              </ul>
              <p className={styles.copyrightNoticeContainer}><span>© Z Energy Limited. All trademarks are used under license.</span><img className={styles.shieldedSiteIcon} src="/images/footerImages/shieldedSite.png" alt="" /></p>
              
          </div>
          
    </div>
  );
}
export default Footer;
