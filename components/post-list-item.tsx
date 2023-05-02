import styles from '../styles/Home.module.css';
import {Author, AuthorProps, testAuthor } from './author';

interface Post {
  author: AuthorProps;
  title: string;
  category: string;
  date: Date; // format date 
  picture: string;
  description: string;
}

export const testPost: Post = {
  author:  {
    name: 'John Doe',
    position: 'CEO',
    picture: 'https://via.placeholder.com/150'
},
  title: "Amintiri din copilarie",
  category: "Literatura romana",
  date: new Date(),
  picture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.emag.ro%2Famintiri-din-copilarie-ion-creanga-9786067870018%2Fpd%2FDLJLJBBBM%2F&psig=AOvVaw0QZ3X5Q4Z3Q4Q8QX6Q2Q8o&ust=1622466145653000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4ZqH4_ACFQAAAAAdAAAAABAD",
  description: "Amintiri din copilarie este o opera literara scrisa de Ion Creanga",

}

export const testPosts: Post[] = [
  testPost, {
    author: {
      name: 'John Doe',
      position: 'CEO',
      picture: 'https://via.placeholder.com/150'
  },
    title: "Luceafarul",
    category: "Literatura romana",
    date: new Date(),
    picture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.emag.ro%2Fluceafarul-mihai-eminescu-9786067870025%2Fpd%2FDLJLJBBBN%2F&psig=AOvVaw0QZ3X5Q4Z3Q4Q8QX6Q2Q8o&ust=1622466145653000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4ZqH4_ACFQAAAAAdAAAAABAJ",
    description: "Luceafarul este o opera literara scrisa de Mihai Eminescu"
  },
  {
    author: 
    {
      name: "Ioan Slavici",
      position: 'CEO',
      picture: 'https://via.placeholder.com/150'
  },
    title: "Mara",
    category: "Literatura romana",
    date: new Date(),
    picture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.emag.ro%2Fmara-ioan-slavici-9786067870032%2Fpd%2FDLJLJBBBO%2F&psig=AOvVaw0QZ3X5Q4Z3Q4Q8QX6Q2Q8o&ust=1622466145653000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4ZqH4_ACFQAAAAAdAAAAABAP",
    description: "Mara este o opera literara scrisa de Ioan Slavici"
  },
  {
    author: {
      name: 'John Doe',
      position: 'CEO',
      picture: 'https://via.placeholder.com/150'
  },
    title: "Hanul Ancutei",
    category: "Literatura romana",
    date: new Date(),
    picture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.emag.ro%2Fhanul-ancutei-mihail-sadoveanu-9786067870049%2Fpd%2FDLJLJBBBP%2F&psig=AOvVaw0QZ3X5Q4Z3Q4Q8QX6Q2Q8o&ust=1622466145653000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4ZqH4_ACFQAAAAAdAAAAABAV",
    description: "Hanul Ancutei este o opera literara scrisa de Mihail Sadoveanu"
  },
  {
    author: {
      name: 'John Doe',
      position: 'CEO',
      picture: 'https://via.placeholder.com/150'
  },
    title: "Ion",
    category: "Literatura romana",
    date: new Date(),
    picture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.emag.ro%2Fion-liviu-rebreanu-9786067870056%2Fpd%2FDLJLJBBBQ%2F&psig=AOvVaw0QZ3X5Q4Z3Q4Q8QX6Q2Q8o&ust=1622466145653000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4ZqH4_ACFQAAAAAdAAAAABAY",
    description: "Ion este o opera literara scrisa de Liviu Rebreanu"
  },
  {
    author: {
      name: 'John Doe',
      position: 'CEO',
      picture: 'https://via.placeholder.com/150'
  },
    title: "Nunta in cer",
    category: "Literatura romana",
    date: new Date(),
    picture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.emag.ro%2Fnunta-in-cer-mircea-eliade-9786067870063%2Fpd%2FDLJLJBBBR%2F&psig=AOvVaw0QZ3X5Q4Z3Q4Q8QX6Q2Q8o&ust=1622466145653000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4ZqH4_ACFQAAAAAdAAAAABAd",
    description: "Nunta in cer este o opera literara scrisa de Mircea Eliade"
  },
  {
    author: {
      name: 'John Doe',
      position: 'CEO',
      picture: 'https://via.placeholder.com/150'
  },
    title: "Enigma Otiliei",
    category: "Literatura romana",
    date: new Date(),
    picture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.emag.ro%2Fenigma-otiliei-george-calinescu-9786067870070%2Fpd%2FDLJLJBBBS%2F&psig=AOvVaw0QZ3X5Q4Z3Q4Q8QX6Q2Q8o&ust=1622466145653000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4ZqH4_ACFQAAAAAdAAAAABAh",
    description: "Enigma Otiliei este o opera literara scrisa de George Calinescu"
  },
  {
    author: {
      name: 'John Doe',
      position: 'CEO',
      picture: 'https://via.placeholder.com/150'
  },
    title: "Jurnal",
    category: "Literatura romana",
    date: new Date(),
    picture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.emag.ro%2Fjurnal-maria-lovinescu-9786067870087%2Fpd%2FDLJLJBBBT%2F&psig=AOvVaw0QZ3X5Q4Z3Q4Q8QX6Q2Q8o&ust=1622466145653000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4ZqH4_ACFQAAAAAdAAAAABAo",
    description: "Jurnal este o opera literara scrisa de Maria Lovinescu"
  },
  {
    author: {
      name: 'John Doe',
      position: 'CEO',
      picture: 'https://via.placeholder.com/150'
  },
    title: "Morometii",
    category: "Literatura romana",
    date: new Date(),
    picture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.emag.ro%2Fmorometii-marin-preda-9786067870094%2Fpd%2FDLJLJBBBU%2F&psig=AOvVaw0QZ3X5Q4Z3Q4Q8QX6Q2Q8o&ust=1622466145653000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4ZqH4_ACFQAAAAAdAAAAABAu",
    description: "Morometii este o opera literara scrisa de Marin Preda"
  },
  {
    author: {
      name: 'John Doe',
      position: 'CEO',
      picture: 'https://via.placeholder.com/150'
  },
    title: "Poezii",
    category: "Literatura romana",
    date: new Date(),
    picture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.emag.ro%2Fpoezii-veronica-micle-9786067870100%2Fpd%2FDLJLJBBBV%2F&psig=AOvVaw0QZ3X5Q4Z3Q4Q8QX6Q2Q8o&ust=1622466145653000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4ZqH4_ACFQAAAAAdAAAAABAx",
    description: "Poezii este o opera literara scrisa de Veronica Micle"
  },
  {
    author: {
      name: 'John Doe',
      position: 'CEO',
      picture: 'https://via.placeholder.com/150'
  },
    title: "Plumb",
    category: "Literatura romana",
    date: new Date(),
    picture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.emag.ro%2Fplumb-george-bacovia-9786067870117%2Fpd%2FDLJLJBBBW%2F&psig=AOvVaw0QZ3X5Q4Z3Q4Q8QX6Q2Q8o&ust=1622466145653000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4ZqH4_ACFQAAAAAdAAAAABA4",
    description: "Plumb este o opera literara scrisa de George Bacovia"
  },
  {
    author: {
      name: 'John Doe',
      position: 'CEO',
      picture: 'https://via.placeholder.com/150'
  },
    title: "Poezii",
    category: "Literatura romana",
    date: new Date(),
    picture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.emag.ro%2Fpoezii-george-cosbuc-9786067870124%2Fpd%2FDLJLJBBBX%2F&psig=AOvVaw0QZ3X5Q4Z3Q4Q8QX6Q2Q8o&ust=1622466145653000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4ZqH4_ACFQAAAAAdAAAAABBH",
    description: "Poezii este o opera literara scrisa de George Cosbuc"
  },
];



interface PostProps {
  post: Post;
}

export function Post({post}: PostProps) {


  return (
    <div className={styles.firstContentBox}>
      <img src={post.picture} alt={post.description} />
      <div className={styles.firstContentBoxCategory}>
        <div className={styles.firstContentBoxCategoryBlog}>
            <p>{post.author.name}</p>          
        </div>
        <div className={styles.firstContentBoxCategoryDate}>
              <p>{new Intl.DateTimeFormat('en-US').format(post.date)}</p>
        </div>
      </div>
          <h2>{post.title}</h2>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      <Author {...post.author} />
    </div>
  )
}