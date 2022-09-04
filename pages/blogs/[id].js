export const getStaticPaths=async ()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/posts');
    const data=await res.json();
    const paths=data.map((post)=>{
        return {
            params:{
            id:post.id.toString()
        }}
    })    ;
  
    return {
        paths:paths,
        fallback:false
        };
    }
    
export  const getStaticProps=async (context)=>{
    const id=context.params.id;
    const res=await fetch('https://jsonplaceholder.typicode.com/posts/'+id).catch((e)=>{});
    const data=await res.json();
    return {
        props:
        {post:data}};
    }

export default function details({post}){
    return(
<div>
<h1>Details</h1>
<h2>{post.title}</h2>
<p>{post.body}</p>
</div>

    )
}