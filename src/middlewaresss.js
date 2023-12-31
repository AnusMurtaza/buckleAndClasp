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
import React from 'react'

const middlewaresss = () => {
  return (
    <div>middlewaresss</div>
  )
}

export default middlewaresss
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




// import { NextResponse } from "next/server";

// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//   console.log("middleware executed");

//   // const authToken = request.cookies.get("authToken")?.value;


//   // const loggedInUserNotAccessPaths =
//   //   request.nextUrl.pathname === "/login" ||
//   //   request.nextUrl.pathname == "/signup";

//   // if (loggedInUserNotAccessPaths) {
//   //   // access not secured route
//   //   if (authToken) {
//   //     return NextResponse.redirect(new URL("/profile/user", request.url));
//   //   }
//   // } else {
//   //   // accessing secured route

//   //   if (!authToken) {
//   //     if (request.nextUrl.pathname.startsWith("/api")) {
//   //       return NextResponse.json(
//   //         {
//   //           message: "Access Denied !!",
//   //           success: false,
//   //         },
//   //         {
//   //           status: 401,
//   //         }
//   //       );
//   //     }

//   //     return NextResponse.redirect(new URL("/login", request.url));
//   //   } else {
//   //     // varify...
//   //   }
//   // }

//   // console.log(authToken);

//   //   return NextResponse.redirect(new URL("/home", request.url));
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: [
//     "/",
//     "/login",
//     "/sign-up",
//     // "/add-task",
//     // "/show-tasks",
//     // "/profile/:path*",
//     // "/api/:path*",
//   ],
// };
