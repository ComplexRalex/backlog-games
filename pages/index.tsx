import type { NextPage } from 'next'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from 'react-bootstrap'

import styles from '../styles/Home.module.css'
import Logo from '/public/logo.png';

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} animate__animated animate__fadeIn`}>
      <Head>
        <title>Backlog Games</title>
        <meta name="description" content="Add your pending games here!" />
      </Head>

      <main>
        <div className='d-flex justify-content-center mb-4'>
          <Image src={Logo} />
        </div>

        <h1 className='text-center mb-4'>Backlog Games</h1>

        <h5 className='text-center mb-4'>
          Store <b>games</b> you own, but have <i>no time</i> to play!
        </h5>

        <div className={styles.button}>
          <Link href="collection">
            <Button className='d-flex align-items-center'>Go to my collection</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
