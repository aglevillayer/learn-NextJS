"use client"; // pour indiquer que c'est un composant client, utilisant des composants React par exemple (ici useState), c'est du dynamique
import { useState } from "react";
import { getPost } from "@/lib/post";

function page() {
  const [inputValue, setInputValue] = useState("");
  // console.log(new Date().getTime()); // s'affiche deux fois dans la console = première exécution côté server puis rendu côté client

  async function handleGetArticle() {
    const post = await getPost(1);
    console.log(post);
  }
  return (
    <div>
      <input
        type="text"
        className="p-2 mb-4 border border-gray-600"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Tu as écrit : {inputValue}</p>
      <button className="p-4 bg-green-300" onClick={handleGetArticle}>
        Récupérer un artcile
      </button>
    </div>
  );
}

export default page;
