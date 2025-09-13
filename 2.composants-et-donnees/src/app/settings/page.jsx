"use client";

import { useContext } from "react";
import { DarkModeContext } from "@/context/DarkModeContext";

function page() {
  const { theme, toggleTheme } = useContext(DarkModeContext);

  return (
    <div>
      <h1 className="mb-4">Paramètres</h1>
      <button className="border border-violet-500 p-2" onClick={toggleTheme}>
        mode : {theme}
      </button>
    </div>
  );
}

export default page;
