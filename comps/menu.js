import Link from 'next/link';
export default function Menu(){
    return (
<div>

<nav >
    <h2>Said Blog</h2>



 <Link href='/'><a>Home</a></Link> &nbsp;


 <Link href='/blogs'><a>List Blogs</a></Link> 





</nav>

</div>

    );
}