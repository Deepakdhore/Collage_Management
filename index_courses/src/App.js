import React from "react";
//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import {Button} from "reactstrap";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./components/Home";
function App()
{

const notify = () => toast("Wow so easy!");

 return(
        <div>
           //<h1>Welcome to courses application</h1>
        <Home/>
        </div>
    );
 }

export default App;
