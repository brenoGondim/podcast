import styles from './styles.module.scss'

export function Header() {

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcast" />

      <p>O melhor para você ouvir, sempre</p>


      <span>sex, 7 maio</span>
    </header>
  )
}