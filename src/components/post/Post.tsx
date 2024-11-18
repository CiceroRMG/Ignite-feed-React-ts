import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Avatar } from '../avatar/Avatar'
import { Comment } from '../comment/Comment'

interface Author {
    name: string
    role: string
    avatarUrl: string
}

interface Line {
    type: string
    content: string
}

interface PostProps {
    author: Author
    contents: Line[]
    postedAt: { date: Date }
}

export function Post({ author, contents, postedAt }: PostProps) {
    const publishedDateFormatted = format(postedAt.date, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(postedAt.date, {
        locale: ptBR,
        addSuffix: true,
    })

    const [comments, setComments] = useState(['Muito legal!'])

    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentText])

        setNewCommentText('')
    }

    function handleNewCommentText(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        
        setComments(commentsWithoutDeletedOne)
    }

    function handleNewCommentInvalid(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('O campo esta vazio, informe um valor!')
    }

    const emptyNewCommentText = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={postedAt.date.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {contents.map( (line) => {
                    if (line.type === "paragraph") {
                        return <p key={line.content}>{line.content}</p>
                    } else {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentText}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required 
                />

                <footer>
                    <button type='submit' disabled={emptyNewCommentText}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment}
                            onDeleteComment={deleteComment} 
                        />
                    )
                })}
            </div>
        </article>
    )
}