"use server"

export async function getImage(){
  const res = await fetch("https://jsonplaceholder.typicode.com/photos/1");
  const img = await res.json();
  img.url = `https://picsum.photos/600`;

  return img
}