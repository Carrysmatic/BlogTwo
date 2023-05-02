import styles from '../styles/Home.module.css';

export interface AuthorProps {
    name: string;
    position: string;
    picture: string;
}

export const testAuthor: AuthorProps = {
    name: 'John Doe',
    position: 'CEO',
    picture: 'https://via.placeholder.com/150'
}

export function Author(props: AuthorProps) {
    return (
        <div className={styles.firstContentBoxAuthor}>
            <img src={props.picture} alt={props.name} />
            <div className={styles.firstContentBoxAuthorName}>
                <strong>{props.name}</strong>
                <span>{props.position}</span>
            </div>
        </div>
    )
}