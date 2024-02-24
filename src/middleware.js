import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // What middlerware will do exactly
  const path=request.nextUrl.pathname  // It gives us the curren path of page

  const isPublic = path ==="/login" || path === '/signup'
  const token = request.cookies.get('token')?.value || ""
  if (isPublic && token){
    // return NextResponse.redirect('/profile')
                    // OR
    return NextResponse.rewrite(new URL('/profile/*',request.nextUrl))
  }
  if(!isPublic && !token){
    return NextResponse.rewrite(new URL('/',request.nextUrl))
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile',
    '/login'
],
}