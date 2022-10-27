import type { NextPage } from 'next'
import Head from 'next/head'
import axios from "axios"
import useSWR from 'swr'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react"

const Home: NextPage = () => {
  const [leader, setLeader] = useState<LeaderData | undefined>()

  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error,  } = useSWR('/api/leaders', fetcher)
  // useEffect(() => {
  //   axios.get("/api/leaders")
  //   .then(res => {
  //     console.log(res.data)
  //     setLeader(res.data)
  //   })
  //   .catch(err => {
  //     console.log(err);
  // })
  // }, [])
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  // `https://twitter.com/share?text=Hi Jamin @0xJamin, I just found you at the @cmfestafrica Festival I'd love to connect with you and learn from you, cheers &hashtags=CMFest22`,
  return (
    <div className={styles.container}>
      <Head>
        <title>Leaders Connect By CMFest Africa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1>Hello World, This is supposed to show something here</h1>
          <div>
            {
              data && <p>Hi {data?.name} is just scanned my tag and found you at #CMFest22 looking to connect to your profile { `https://twitter.com/${data?.username}` }</p>
            }
          </div>
        </div>
      </main>


    </div>
  )
}

export default Home
