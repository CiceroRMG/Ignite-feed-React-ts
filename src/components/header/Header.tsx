import styles from './Header.module.css'

import igniteLogo from '../../assets/logo.svg'

export function Header() {

    return (
      <>
        <div className={styles.header}>
            <img src={igniteLogo} />
            <h1>Ignite Feed</h1>
        </div>
      </>
    )
  }
  