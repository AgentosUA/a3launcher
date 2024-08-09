import { FC, useState } from 'react'

import styles from './ui.module.scss'

import Logo from '@renderer/shared/ui/assets/images/logo.png'

const HomePage: FC = () => {
  const [selectedPath, setSelectedPath] = useState('')

  const openDirectorySelector = async (): Promise<void> => {
    const paths = await window.electron.ipcRenderer.invoke('choose-a3-path')

    if (paths && paths.length > 0) {
      setSelectedPath(paths[0])
    }
  }

  const openGame = async (): Promise<void> => {
    window.electron.ipcRenderer.invoke('start-a3', selectedPath)
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={Logo} alt="logo" />
      </header>

      <main className={styles.main}>
        <div className={styles.actions}>
          <h1></h1>
          <div className={styles.settings}>
            {selectedPath}
            <button onClick={openDirectorySelector}>еуіе</button>
          </div>
        </div>
        <button onClick={openGame} className={styles.install}>
          START
        </button>
      </main>

      <footer className={styles.footer}>
        <p>Version 0.0.1</p>
      </footer>
    </div>
  )
}

export { HomePage }
