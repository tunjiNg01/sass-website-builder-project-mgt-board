import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const searchParams = url.searchParams.toString();
  let hostname = request.headers;
  const isAuth = false;
  const pathWithSearchParams = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;
  // if custom subdomain exist
  // console.log(searchParams.length > 0);

  const customSubdomain = hostname
    .get("host")
    ?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`)
    .filter(Boolean)[0];

  console.log(`/${customSubdomain}${pathWithSearchParams}`);
  if (isAuth) {
    if (customSubdomain) {
      return NextResponse.rewrite(
        new URL(`/${customSubdomain}${pathWithSearchParams}`, request.url),
      );
    }
  }

  if (url.pathname === "/sign-in" || url.pathname === "/sign-up") {
    return NextResponse.redirect(new URL("/agency/sign-in", request.url));
  }

  if (
    url.pathname === "/" ||
    (url.pathname === "/site" && url.host === process.env.NEXT_PUBLIC_DOMAIN)
  ) {
    return NextResponse.rewrite(new URL("/site", request.url));
  }

  if (
    url.pathname.startsWith("/agency") ||
    url.pathname.startsWith("/subaccount")
  ) {
    return NextResponse.rewrite(
      new URL(`${pathWithSearchParams}`, request.url),
    );
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/about/:path*",
// };
