import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { GetStaticProps, GetStaticPaths, GetStaticPropsResult, GetStaticPathsResult } from 'next'
import { useEffect, useState } from 'react'

const Home = () => {
  const [count, setCount] = useState(0)

  const countUp = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log('Hook `useEffect`')

    const cleanup = () => {
      console.log('Hook clean up')
    }
    return cleanup
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <button onClick={countUp}>{count}</button>
        <Link href="/demo">To Demo Page</Link>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

/**
 * クライアントサイドレンダリングの処理
 * @param context
 */
export const getStaticProps: GetStaticProps = async (
  context,
): Promise<GetStaticPropsResult<any>> => {
  console.log(context)
  return { props: {} }
}

/**
 * Dynamic Route Path
 * ページパスが外部データに依存している場合に利用
 */
export const getStaticPaths: GetStaticPaths = async (): Promise<GetStaticPathsResult<any>> => {
  return {
    paths: ['/'],
    fallback: false,
  }
}

/**
 * サーバサイドレンダリングの処理
 * - サーバサイドレンダリングを利用する場合は、getStaticProps/getStaticPaths は利用できない
 * @param context
 */
// export const getServerSideProps: GetServerSideProps = async (
//   context,
// ): Promise<GetServerSidePropsResult<any>> => {
//   console.log(context)
//   return {
//     props: {},
//   }
// }

export default Home
