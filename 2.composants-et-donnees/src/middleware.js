import { NextResponse } from "next/server"; // sert à rediriger

export function middleware (request){
    const url = request.nextUrl // on récupère l'url sur lequel on veut naviguer

    console.log(url.pathname)

    if(url.pathname==="/private"){ // si l'url est privé
        return NextResponse.redirect(new URL ("/", request.url)) // on redirige vers la racine (sous-entendu on n'est pas connecté et donc on n'a pas accès à cette page, donc on redirige vers la homepage)
    }
    return NextResponse.next() // si la page n'est pas privée, on continue notre requête et on affiche la page
}