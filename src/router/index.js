import Posts from "../Pages/Posts";
import React from "react";
import About from "../Pages/About";
import PostIdPage from "../Pages/PostIdPage";
import Login from "../Pages/Login";

export const privateRoutes = [
    {path: '/about',element: About},
    {path: '/posts',element: Posts},
    {path: '/posts/:id',element: PostIdPage}
]

export const publicRoutes = [
    {path: '/login',element: Login},
]