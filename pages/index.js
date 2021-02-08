import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Concerts from '../components/concerts'

export async function getStaticProps() {
  const res = await fetch('https://potential-bassoon.firebaseio.com/concerts.json')
  const concerts = await res.json()

  if (!concerts) {
      return {
          notFound: true
      }
  }

  return {
      props: {
          concerts: concerts
      }
  }
}

export default function Home(concerts) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Test NextJs
        </h1>
        <h2><Link href="/database">Database</Link></h2>
        <h2><Link href="/lucs">Lucs</Link></h2>
        <h2><Link href="/realtime_lucs">Lucs (realtime)</Link></h2>
        <Concerts concerts={concerts.concerts}/>
      </main>
    </div>
  )
}
