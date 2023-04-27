import styles from '../styles/Home.module.css';

export interface AuthorProps {
    author: string;
    position: string;
    picture: string;
}

export const testAuthor: AuthorProps = {
    author: 'John Doe',
    position: 'CEO',
    picture: 'https://via.placeholder.com/150'
}

export function Author(props: AuthorProps) {
    return (
        <div className={styles.firstContentBoxAuthor}>
            <img src={props.picture} alt={props.author} />
            <div className={styles.firstContentBoxAuthorName}>
                <strong>{props.author}</strong>
                <span>{props.position}</span>
            </div>
        </div>
    )
}