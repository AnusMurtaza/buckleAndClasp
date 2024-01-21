// import { NextResponse } from "next/server";

// export async function middleware(request) {
//   const authToken = request.cookies.get("token")?.value;
//   const role = request.cookies.get("role")?.value;

//   const isLoginPage = request.nextUrl.pathname === "/login";
//   const isSignUpPage = request.nextUrl.pathname === "/sign-up";
//   const isDashboardRoute = request.nextUrl.pathname.startsWith("/dashboard");
//   const isSecuredRoute = !isLoginPage && !isSignUpPage;

//   if (!authToken && isSecuredRoute) {
//     // Redirect to the login page if not logged in and trying to access secured routes
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   if (authToken && isLoginPage) {
//     // If logged in and trying to access the login page, redirect to the home page
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   if (isDashboardRoute && role !== "admin") {
//     // Redirect to the home page if trying to access /dashboard without admin role
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   // Allow access to specified routes for users with or without the "admin" role
//   const allowedRoutes = ["/my-account", "/orders", "/edit-account"];
//   if (!authToken && !isLoginPage && !allowedRoutes.includes(request.nextUrl.pathname)) {
//     // Redirect to the login page if not logged in and trying to access other secured routes
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
// }

// export const config = {
//   matcher: [
//     "/dashboard/:path*",
//     "/dashboard",
//     "/login",
//     "/sign-up",
//     "/my-account",
//     "/orders",
//     "/edit-account",
//     // Add other routes as needed
//   ],
// };







import { NextResponse } from "next/server";

export async function middleware(request) {
  const authToken = request.cookies.get("token")?.value;
  const role = request.cookies.get("role")?.value;

  const isLoginPage = request.nextUrl.pathname === "/login";
  const isSignUpPage = request.nextUrl.pathname === "/sign-up";
  const isDashboardRoute = request.nextUrl.pathname.startsWith("/dashboard");
  const isSecuredRoute = !isLoginPage && !isSignUpPage;

  if (!authToken && isSecuredRoute) {
    // Redirect to the login page if not logged in and trying to access secured routes
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (authToken && (isLoginPage || isSignUpPage)) {
    // If logged in and trying to access the login or sign-up page, redirect to the home page
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isDashboardRoute && role !== "admin") {
    // Redirect to the home page if trying to access /dashboard without admin role
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Allow access to specified routes for users with or without the "admin" role
  const allowedRoutes = ["/my-account", "/orders", "/edit-account"];
  if (!authToken && !isLoginPage && !isSignUpPage && !allowedRoutes.includes(request.nextUrl.pathname)) {
    // Redirect to the login page if not logged in and trying to access other secured routes
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/dashboard",
    "/login",
    "/sign-up",
    "/my-account",
    "/orders",
    "/edit-account",
    // Add other routes as needed
  ],
};

