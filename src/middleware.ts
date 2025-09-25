import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.cookies.set("pathname", request.nextUrl.pathname);
  return response;
}
