import React from "react";
//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import {Button} from "reactstrap";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Course from "./components/Course";
import Home from "./components/Home";
import Allcourses from"./components/Allcourses";


function App()
{
const notify = () => toast("Wow so easy!");

 return(
        <div>
           //<h1>Welcome to courses application</h1>
        <Home/>
        <Allcourses/>
        </div>
    );
 }

export default App;
