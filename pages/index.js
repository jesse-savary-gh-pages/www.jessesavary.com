import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JesseSavary.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://jessesavary.com">Jesse Savary!</a>
        </h1>

        <p className={styles.description}>
          This is my website; it's mostly blank for the time being
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/jesse-savary" className={styles.card}>
            <h3>GitHub &rarr;</h3>
            <p>Find projects I've created or contributed towards</p>
          </a>

          <a href="https://www.lckroom.com" className={styles.card}>
            <h3>LCKROOM &rarr;</h3>
            <p>My startup and current main project</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        Copyright Jesse Savary 2020
      </footer>
    </div>
  )
}
