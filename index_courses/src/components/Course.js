import React from "react";
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

const Course=({course})=>{
    return(
        <Card>
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>It {course.description}</CardText>
                    <Container className="text-center">
                        <Button color="danger">Delete</Button>
                        <Button color="warning m-2">Update</Button>
                    </Container>
            </CardBody>
        </Card>
    )
};

export default Course;