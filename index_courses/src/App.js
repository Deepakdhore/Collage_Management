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
import Menus from "./components/Menus";
import{BrowserRouter as Router,Route,Routes} from "react-router-dom";
function App()
{
const notify = () => toast("Wow so easy!");

 return(
        <div>
          <Router>
             <Header name={"Deepak"}/>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <h2>this is menu side</h2>
                                <Menus/>
                            </Col>
                            <Col md={8}>
                            <h2>this is content side</h2>

                            <Routes>
                            <Route path="/" element={<Home/>} exact />
                            <Route path="/add-course" element={<AddCourse/>} exact />
                            <Route path="/view-courses" element={<Allcourses/>} exact />
                            </Routes>
                            </Col>
                        </Row>
                    </Container>
          </Router>
        </div>
    );
 }

export default App;
