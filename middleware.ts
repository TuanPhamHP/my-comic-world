import { NextRequest } from 'next/server';

const isAuthenticated = (any: any) => true;

// Limit the middleware to paths starting with `/products/`
export const config = {
	matcher: '/products/:function*',
};

export function middleware(request: NextRequest) {
	// Call our authentication function to check the request
	if (!isAuthenticated(request)) {
		console.log(request.url);

		// Respond with JSON indicating an error message
		// return Response.json({ success: false, message: 'authentication failed' }, { status: 401 });

		// return Response.redirect(new URL('/error', 'http://localhost:3000'));
		return Response.redirect(new URL('/error?code=401', 'http://localhost:3000'));
	}
}
