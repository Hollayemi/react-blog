import React, {useState} from "react"
import { useRoutes } from 'react-router-dom';

import Signup from "../Components/auth/Signup";
import Login from "../Components/auth/Login";
import ForgotPass from "../Components/auth/ForgotPass";
import Post from "../Container/post";
import NotFound from "../Components/NotFound";
import Home from "../Container/Home";
import ContactForm from "../Components/Contact/contactForm";
import MyHelp from "../Container/Help"
import PostTemplate from "../Container/PostTemplate/postTemplate";





const MyRouter = () => {


    let allRoutes = useRoutes([
        
        {
            path: "/",
            children: [
                {path:"/", element:<Home />},
                {path:"/signup", element:<Signup />},
                {path:"/signin", element:<Login />},
                {path:"/forgotPassword", element:<ForgotPass />},
                {path:"/contact-us", element:<ContactForm />},
                {path:"/help", element:<MyHelp />},

                {path:"/post/:id", element: <PostTemplate/> }
            ]
        },
        {
            path: "/blog/",
            element: <Post />,
            children: [
                {path:"post", element:<Post />},
            ]
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ])
    return allRoutes
}

export default MyRouter
