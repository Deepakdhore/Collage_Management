import React,{useEffect,useState} from 'react';
import {Form, Label ,FormGroup, Input, Container,textarea,Button} from "reactstrap";
import axios from "axios";
import base_url from "./../Api/bootapi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCourse=()=>{


    useEffect(() =>{
    document.title="Add Course"}, []);

    const [course,setCourse] = useState({});
    //form handler
    const handleForm=(e)=>{
        console.log(course);
        postDataToServer(course);
        e.preventDefault();

    };

    //creatig funtion to post data on server
    const postDataToServer = (data)=>{
        axios.post(`${base_url}/addCourse`,data).then(
            (response)=>{
                console.log(response+"success");
                toast.success("Course Added Successfully");
            },
            (error)=>{
                console.log(error+"failure");
                toast.error("Failed to Add Course");
            }

        );
    };

    return(
        <Container>
            <h1 className="text-center">Fill Course</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="userId">Course Id</Label>
                        <Input
                            type="text"
                            name="userId"
                            id="userId"
                            placeholder="Enter Course Id"
                            onChange={(e)=>{
                                setCourse({...course,id:e.target.value});
                            }}

                        />
                </FormGroup>

                <FormGroup>
                    <Label for="title">Course Title</Label>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Enter Course Title"
                            onChange={(e)=>{
                                setCourse({...course,title:e.target.value});
                             }}
                        />


                </FormGroup>
                <FormGroup>
                    <Label for="description">Course Description</Label>
                        <Input
                            type="textarea"
                            name="description"
                            id="description"
                            placeholder="Enter Course Description"
                            style={{height: '150'}}
                         onChange={(e)=>{
                          setCourse({...course,description:e.target.value});
                         }}
                        />


                </FormGroup>
                <Container className="text-center">
                <Button type="submit" color="primary">Add Course</Button>
                <Button type="reset" color="warning" className="m-2" >Clear</Button>
                <ToastContainer/>
                </Container>
            </Form>
        </Container>

    )
    };
export default AddCourse;