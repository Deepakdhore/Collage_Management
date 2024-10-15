import React from "react";
//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import {Button} from "reactstrap";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App()
{

const notify = () => toast("Wow so easy!");

 return(
        <div >
           <h1>Header</h1>
            <p>this is teh main app.js block</p>
            <Header name="ramesh"/>

            <Button color='warning' onClick={notify}> First react button </Button>
            <button onClick={notify}>Notify!</button>
            <ToastContainer />
            <p>this is teh main app.js block</p>
            <Header name="suresh"/>

        </div>
    );
 }

export default App;
