import { Avatar } from '../avatar/Avatar'
import styles from './Sidebar.module.css'

import { PencilLine } from 'phosphor-react'

export function Sidebar() {

    return (
      <>
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/ciceroRMG.png" />
                <strong>Nome do usuário</strong>
                <span>Emprego do usuário</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
      </>
    )
  }
  