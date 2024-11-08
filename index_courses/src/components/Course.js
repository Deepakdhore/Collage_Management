import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import base_url from "./../Api/bootapi";
import{
    Card,
        CardBody,
        CardTitle,
        CardSubtitle,
        CardText,
        CardFooter,
        Button,
        Container,
} from "reactstrap";



const deleteNotify=()=>toast("Deleted");

const updateNotify=()=>toast("updated");

const Course=({course,update})=>{

const deleteCourse=(id)=>
{
    axios.delete(`${base_url}/deleteById/${id}`).then(
    (response)=>{
    console.log(id)
    toast.success("successflly deleted");
    update(id);
    },
    (error)=>{
    console.log("error")
    toast.error("error in deleting")
    })
}

    return(
        <Card>
            <CardBody className="text-center">
                <CardSubtitle style={{fontWeight:'bold'}}>{course.title}</CardSubtitle>
                <CardText>It {course.description}</CardText>
                    <Container className="text-center">
                        <Button type="submit" color="danger"onClick={ ()=>{
                            deleteCourse(course.id);
                        }}>Delete</Button>
                        <Button color="warning m-2" onClick={updateNotify}>Update</Button>
                    </Container>
                <ToastContainer/>
            </CardBody>
        </Card>
    )
};

export default Course;