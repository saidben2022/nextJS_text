import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Said Blog</title>
        <meta name="description" content="Best Blogs Ever" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

<h1>Welcome to my blog</h1>
<p>Said Blog,Your best Source for truth and a big dose of satisfaction</p>
    </div>
  )
}
