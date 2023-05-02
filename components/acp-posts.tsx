import { start } from "repl";
import { Post, testPosts } from "./post-list-item"

interface PostList {
    start: number;
    finish: number;
    list: [];
}

interface ListItems {

}

export const testList:PostList[] = {
   { start:0,
    finish:3,
    list:[

    ]}
}


export function PostDetails (props:PostList) {

    return (
        <div>
{props.list.slice(props.start,props.finish).map((article) => {
    return <Post post={article} />
   })}
   </div>
   )
}



  
{/* transforma mapul de mai sus in componenta care sa aibe start,finish, array(moving parts) */}