import styles from './styles.module.scss'

export function Player() {

  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      <div className={styles.emptyPlayer}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer>
        <div className={styles.buttons}>
          <button type="button">
            <img src="/shuffle.svg" alt="Embaralhar" />
          </button>
          <button type="button">
            <img src="/play-previous.svg" alt="Toca anterior" />
          </button>
          <button type="button">
            <img src="/pause.svg" alt="Tocar" />
          </button>
          <button type="button">
            <img src="/play-next.svg" alt="Toca próxima" />
          </button>
          <button type="button">
            <img src="/repeat.svg" alt="Repetir" />
          </button>
        </div>
      </footer>
    </div>
  )
}