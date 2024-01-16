// import store from "@/redux/store";
// import { NextResponse } from "next/server";

// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//   console.log("middleware executed");

//   const token = store.getState().auth;
// console.log(token,"ggggg")
//   const loggedInUserNotAccessPaths =
//     request.nextUrl.pathname === "/login" ||
//     request.nextUrl.pathname === "/sign-up";

//   if (loggedInUserNotAccessPaths) {
//     // access not secured route
//     if (token) {
//       return NextResponse.redirect(new URL("/", request.url));
//     }
//   } else {
//     // accessing secured route
//     if (!token) {
//       return NextResponse.redirect(new URL("/login", request.url));
//     }
//   }

//   // Continue with the rest of your middleware logic

//   // console.log(token);
// import Cookies from 'js-cookie'
// import React from 'react'

// const middlewaresss = () => {
//   const abc = Cookies.get('name')
//     console.log(abc)
//   return (
//     <div>middlewaresss</div>
//   )
// }

// export default middlewaresss
//   // return NextResponse.redirect(new URL("/home", request.url));
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: [
//     "/",
//     "/login",
//     "/signup",
//     // "/add-task",
//     // "/show-tasks",
//     // "/profile/:path*",
//   ],
// };




import Cookies from "js-cookie";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
 
  const authToken = request.cookies.get("token")?.value;
  // const authToken = Cookies.get('token');
  
  console.log("middleware executed",authToken);

  const loggedInUserNotAccessPaths =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname == "/sign-up";

console.log(request.nextUrl.pathname)
  if (loggedInUserNotAccessPaths) {
    // access not secured route
    if (authToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } 
  else {
    // accessing secured route
    if (!authToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  // if (loggedInUserNotAccessPaths) {
  //   // access not secured route
  //   if (authToken) {
  //     return NextResponse.redirect(new URL("/sds", request.url));
  //   }
  // } else {
  //   // accessing secured route

  //   if (!authToken) {


  //     return NextResponse.redirect(new URL("/login", request.url));
  //   } else {
  //     // varify...
  //   }
  // }

  // console.log(authToken);

  //   return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/dashboard",
    "/login",
    "/sign-up",
    // "/add-task",
    // "/show-tasks",
    // "/profile/:path*",
    // "/api/:path*",
  ],
};












// import { NextRequest, NextResponse } from "next/server";

// export async function middleware() {
//   const { pathname } = request.nextUrl;
//   const url = request.nextUrl.clone();

//   // const cookie = request.cookies.get(process.env.TOKEN as string);
//   const token = Cookies.get('token');
//   // const abc = Cookies.get('token')

//   const userRoutes = [
//     "/dashboard/user/profile",
//     "/dashboard/user/change-password",
//   ];

//   const adminRoutes = [
//     "/dashboard/admin/profile",
//     "/dashboard/admin/change-password",
//   ];

//   const superAdminRoutes = [
//     ...adminRoutes,
//     "/dashboard/super-admin/admins",
//     "/dashboard/super-admin/add-admin",
//   ];

//   if (token) {
//     url.pathname = "/not-found";

//     // const user = decodedToken(token as string) as IUserInfo;

//     // if token is expired then redirect to login page
//     if (user.exp < Date.now() / 1000) {
//       url.pathname = "/signin";
//       return NextResponse.redirect(url);
//     }
//     // if user role is not admin and user is trying to access admin routes then redirect to login page
//     if (
//       (user.role !== userRole.ADMIN || user.role !== userRole.SUPER_ADMIN) &&
//       (adminRoutes.includes(pathname) || superAdminRoutes.includes(pathname))
//     ) {
//       return NextResponse.redirect(url);
//     }

//     // if admin is trying to access user routes then redirect to login page
//     if (user.role === userRole.ADMIN && userRoutes.includes(pathname)) {
//       return NextResponse.redirect(url);
//     }
//     // if admin is trying to access super-admin routes then redirect to login page
//     if (user.role === userRole.ADMIN && superAdminRoutes.includes(pathname)) {
//       return NextResponse.redirect(url);
//     }
//     // if super-admin is trying to access user routes then redirect to login page
//     if (user.role === userRole.SUPER_ADMIN && userRoutes.includes(pathname)) {
//       return NextResponse.redirect(url);
//     }
//   }
// }