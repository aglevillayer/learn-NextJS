import Link from "next/link"

async function page({params}) {
  const {id}= await params
  console.log("serveur : " + id) // Next nous permet de voir les console.log côté serveur aussi dans notre outil d'inspection du navigateur. Ici, ça s'exécute côté serveur ! et non côté client (comme vite)

  // get the post from id
  const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await res.json()

  console.log(post)
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">
        {post.title}
      </h1>
      <p className="text-gray-600 mb-8">{post.body}</p>

      <Link href='/blog' className="text-blue-500 hover:underline">
        ← Reotur à la page de blog
      </Link>
    </main>
  )
}

export default page