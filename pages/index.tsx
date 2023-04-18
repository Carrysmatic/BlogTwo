import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (

    <div className={styles.container}>
      <div className={styles.mainBar}>
        <div className={styles.mainBarContent}>
          <div className={styles.mainBarContentLeft}>
            {/* searchbar */}
          </div>
          <div className={styles.mainBarContentMiddle}>
            {/* title of page*/}
          </div>
          <div className={styles.mainBarContentRight}>
            {/* icons */}
          </div>
        </div>
        </div>
        <div className={styles.firstTitle}>
          <h1>My Title</h1>
        </div>
        <div className={styles.firstCarousel}>
          {/* carousel */}
        </div>
        <div className={styles.firstContent}>
          <div className={styles.firstContentBox}>
            {/* content */}
          </div>
        </div>
        <div className={styles.secondTitle}>
          <h1>My Title</h1>
        </div>
        <div className={styles.secondCarousel}>
          {/* carousel */}
        </div>
        <div className={styles.secondContent}>
          <div className={styles.secondContentBox}>
            {/* content */}
          </div>
        </div>
        <div className={styles.subscribe}>
          {/* subscribe to newsletter  */}
          </div>
          <div className={styles.footer}>
            {/* footer */}
            </div>
    </div>

  )
}
