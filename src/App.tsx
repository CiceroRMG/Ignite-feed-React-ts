
import './global.css'
import styles from './App.module.css'
import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'
import { Post, PostType } from './components/post/Post'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      name: "Cícero Gomes",
      role: "CTO Beans",
      avatarUrl: "https://github.com/ciceroRMG.png"
    },
    contents: [
      {type: 'paragraph', content: 'Aqui o conteúdo primário'},
      {type: 'paragraph', content: 'Aqui o conteúdo secundário'},
      {type: 'link', content: 'google.dev/forms'}
    ],
    postedAt: {
      date: new Date('2024-11-17 10:30:00 ')
    }
  },
  {
    id: 2,
    author: {
      name: "Google",
      role: "CTO Google",
      avatarUrl: "https://github.com/google.png"
    },
    contents: [
      {type: "paragraph", content: "Aqui o conteúdo primário"},
      {type: "paragraph", content: "Aqui o conteúdo secundário"},
      {type: "link", content: "#beans"}
    ],
    postedAt: {
      date: new Date('2024-11-16 10:30:00 ')
    }
  }
]

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id} 
                props={post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
