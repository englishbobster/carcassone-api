import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Tile} from "../component/Tile";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Start of Carcassonne API</title>
      </Head>
      <Tile imageName={"test_tile.png"}/>
    </div>
  )
}

export default Home
