import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Only apply to preview deployments
  if (process.env.VERCEL_ENV !== 'preview') {
    return NextResponse.next()
  }

  // Check if the user is already authenticated
  const isAuthenticated = request.cookies.has('preview-auth')
  
  // If authenticated, allow access
  if (isAuthenticated) {
    return NextResponse.next()
  }

  // Check if this is a login attempt
  const url = new URL(request.url)
  if (url.pathname === '/preview-login') {
    const password = url.searchParams.get('password')
    
    if (password === process.env.PREVIEW_PASSWORD) {
      const response = NextResponse.redirect(url.origin)
      response.cookies.set('preview-auth', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 // 24 hours
      })
      return response
    }
    
    return NextResponse.redirect(`${url.origin}/preview-login?error=invalid`)
  }

  // If not authenticated, redirect to login page
  if (url.pathname !== '/preview-login') {
    return NextResponse.redirect(`${url.origin}/preview-login`)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
} 