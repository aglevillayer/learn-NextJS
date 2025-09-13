export async function GET(request){
  // on a ici la logique de fetch
  // on crée une nouvelle réponse juste pour changer, mais on peut aussi juste fetch les posts comme déjà fait dans /lib/posts.js
  return new Response ( 
    JSON.stringify([{
      userId:999, 
      id: 27, 
      title:"Données depuis /api/posts", 
      body:"Hello world"}]),
      {status: 200, header:{"Content-Type":"application/json"}})
}