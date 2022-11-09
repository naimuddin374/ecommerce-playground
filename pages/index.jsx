import Head from 'next/head'
import Image from 'next/image'
import Categories from '../components/categories'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Categories />
    </div>
  )
}
