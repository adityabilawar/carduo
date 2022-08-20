// auth middleware
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isUserAuth } from '../utils/auth'

export function middleware(request: NextRequest) {
  if(!isUserAuth(localStorage))
  	return NextResponse.redirect(new URL('/register', request.url));
  return NextResponse.next();
}

export const config = {
  matcher: '/register',
}