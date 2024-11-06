import React,{useEffect} from 'react';
import {Form, Label ,FormGroup, Input, Container,textarea,Button} from "reactstrap";

const AddCourse=()=>{


    useEffect(() =>{
    document.title="Add Course"});

    return(
        <Container>
            <h1 className="text-center">Fill Course</h1>
            <Form>
                <FormGroup>
                    <Label for="userId">Course Id</Label>
                        <Input
                            type="text"
                            name="userId"
                            id="userId"
                            placeholder="Enter Course Id"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="title">Course Title</Label>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Enter Course Title"
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
                        />
                </FormGroup>
                <Container className="text-center">
                <Button color="primary">Add Course</Button>
                <Button color="warning" className="m-2">Clear</Button>
                </Container>
            </Form>
        </Container>
    )
    };
export default AddCourse;