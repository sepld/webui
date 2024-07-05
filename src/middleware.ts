import { type NextRequest } from 'next/server';

import nextIntlMiddleware from '@/middlewares/localeMiddleware'

export default function middleware(request: NextRequest) {
  return nextIntlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
