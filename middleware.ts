import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {

    //si el usuario selecciona un producto para comprar y lo guardamos en localstorage, 
    //puede acceder a las rutas, de lo contrario no
    const selectProduct = req.cookies.get('Product')
    const url= req.nextUrl.pathname
    console.log('*********************************aca pasando por el middleware antes del if')

    if(url.startsWith('/checkout') || url.startsWith('/confirmation')){

        console.log('*********************************aca pasando por el middleware')

        if(!selectProduct){
            console.log('******************no se encontró el producto, vamos al home')
            return NextResponse.redirect('/')
        }
    }
    
}