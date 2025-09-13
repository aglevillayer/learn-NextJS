"use client"

import { createContext, useState, useEffect } from "react"

export const DarkModeContext = createContext()

export function DarkModeProvider({children}){
    const [theme, setTheme]= useState("light")

    function toggleTheme(){
        setTheme((prevTheme)=>(prevTheme==="light"?"dark":"light"))
    }

    useEffect(()=>{
        const root = window.document.documentElement // là ça cible l'élément html = la balise html
        if(theme==="dark"){
            root.classList.add("dark") // ça va rajouter une class="dark" à notre balise html, donc à notre page. On pourra alors ajuster le style de la page en fonction de cette class grâce à la config tailwind
        }else{
            root.classList.remove("dark")
        }
    },[theme])

    return (
    <DarkModeContext.Provider value={{theme, toggleTheme }}>
        {children}
    </DarkModeContext.Provider>
    )
}