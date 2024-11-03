import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const Course=({course})=>{
    return(
        <Card>
            <CardBody className="text-center">
                <CardSubtitle style={{fontWeight:'bold'}}>{course.title}</CardSubtitle>
                <CardText>It {course.description}</CardText>
                    <Container className="text-center">
                        <Button color="danger"onClick={deleteNotify}>Delete</Button>
                        <Button color="warning m-2" onClick={updateNotify}>Update</Button>
                    </Container>
            </CardBody>
        </Card>
    )
};

export default Course;