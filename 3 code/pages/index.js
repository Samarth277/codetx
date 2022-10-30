import Head from 'next/head'
import Hero from '../Component/Hero'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Titan Intech</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>

  )
}
