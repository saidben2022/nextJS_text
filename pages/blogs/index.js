
import Link from 'next/link'
export  const getStaticProps=async ()=>{
const res=await fetch('https://jsonplaceholder.typicode.com/posts');
const data=await res.json();
return {
    props:
    {posts:data}};
}

export default function Index({posts}){
    return(

<div>
<h2>List Blogs</h2>
{posts.map((post)=>{
return(
    <div key={post.id}>

        <Link href={"/blogs/"+post.id} >
<a><h3>{post.title}</h3></a>
</Link>
<p>{post.body}</p>

    </div>
)

})}

</div>
    );
}