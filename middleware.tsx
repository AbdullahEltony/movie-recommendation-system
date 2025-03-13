import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value; 
  console.log('token', token);

  if (!token) {
    console.log('unauthorized');
    return NextResponse.redirect(new URL("/auth/login", req.url)); 
  }else {
    console.log('authorized');
  }
}


export const config = {
  matcher: ["/pages", "/test"], 
};