import React from "react";
//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import {Button,Row,Col,Container} from "reactstrap";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Course from "./components/Course";
import Home from "./components/Home";
import Allcourses from"./components/Allcourses";
import AddCourse from "./components/AddCourse";


function App()
{
const notify = () => toast("Wow so easy!");

 return(
        <div>
           //<h1>Welcome to courses application</h1>
        <Container>
            <Row>
                <Col md={4}>
                <h2>this is menu side</h2>
                </Col>
                <Col md={8}>
                <h2>this is content side</h2>
                </Col>
            </Row>
        </Container>
        </div>
    );
 }

export default App;
