import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Geo-based URL redirection middleware
 * 
 * Automatically redirects visitors from Bangladesh to /bd route
 * while keeping visitors from other countries on the main site.
 * 
 * For development testing:
 * - Visit localhost:3000?country=BD to simulate Bangladesh visitor
 * - Visit localhost:3000 to simulate non-Bangladesh visitor
 * 
 * In production, this uses Next.js's built-in geo-location detection
 * based on the visitor's IP address.
 */
export function middleware(request: NextRequest) {
  /* ORIGINAL CODE - RE-ENABLED SINCE ISSUE IS PATH-SPECIFIC
  // Get the pathname and country from the request
  const pathname = request.nextUrl.pathname
  const searchParams = request.nextUrl.searchParams
  
  // For development testing: allow forcing country with ?country=BD
  const forceCountry = searchParams.get('country')
  const country = forceCountry || request.geo?.country || 'US' // Default to US if country detection fails
  
  // Don't redirect if already on /bd route or its subroutes
  if (pathname.startsWith('/bd')) {
    return NextResponse.next()
  }
  
  // Don't redirect static assets, API routes, or Next.js internal routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.') ||
    pathname.startsWith('/_vercel')
  ) {
    return NextResponse.next()
  }
  
  // Redirect Bangladesh visitors to /bd
  if (country === 'BD') {
    const url = request.nextUrl.clone()
    url.pathname = '/bd'
    // Remove the country parameter from the URL if it was used for testing
    if (forceCountry) {
      url.searchParams.delete('country')
    }
    return NextResponse.redirect(url)
  }
  
  // Let other visitors stay on the main site
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 