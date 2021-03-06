/** @jsx jsx */
import Head from 'next/head'
import { Global, jsx } from '@emotion/core'
import {
  container,
  main,
  code,
  grid,
  card,
  globalStyles,
  header,
  headerLink,
  description
} from '../shared/index/styles'

const Home = () => (
  <div css={container}>
    <Global styles={globalStyles} />
    <Head>
      <title>Getting started</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main css={main}>
      <h1 css={header}>
        Welcome to{' '}
        <a css={headerLink} href="https://nextjs.org">
          Next.js!
        </a>
      </h1>

      <p css={description}>
        Get started by editing{' '}
        <code css={code}>pages/{'{{ lang }}'}/index.js</code>
      </p>

      <div css={grid}>
        <a
          href="https://nextjs.org/docs"
          css={card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Next.JS Docs ↗</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" css={card}>
          <h3>Starter Docs &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/zeit/next.js/tree/master/examples"
          css={card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Examples ↗</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://zeit.co/new?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          css={card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Deploy ↗</h3>
          <p>
            Instantly deploy your Next.js site to a public URL with ZEIT Now.
          </p>
        </a>
      </div>
    </main>
  </div>
)

export default Home
