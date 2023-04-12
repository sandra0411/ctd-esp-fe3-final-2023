import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {

    //si el usuario selecciona un producto para comprar y lo guardamos en localstorage, 
    //puede acceder a las rutas, de lo contrario no
    const selectProduct = req.cookies.get('Product')
    const url= req.nextUrl.pathname

    if(url.startsWith('/checkout') || url.startsWith('/confirmation')){

        if(!selectProduct){
            return NextResponse.redirect('http://localhost:3000/')
        }
    }
    
}