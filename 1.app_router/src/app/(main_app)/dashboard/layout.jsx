"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

function layout({children}) {
    const pathname=usePathname()
  return (
    <div>
        <nav className="flex gap-x-10">
            <Link className="underline" href="/dashboard/rh">Ressources Humaines</Link> 
            <Link className="underline" href="/dashboard/entreprise">Raports Financiers</Link>  
        </nav>
        {children}
    </div>
  )
}

export default layout