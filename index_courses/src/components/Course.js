import React from "react";
import{
    Card,
    Cardbody,
    CardTitle,
    CardSubtitile,
    CardText,
    CardFooter,
    Button,
    Container,
} from "reactstrap";

const Course=()=>{
    return(
        <Card>
            <Cardbody>
                <CardSubtitile>Java Course</CardSubtitile>
                <CardText>It is a java course for beginers</CardText>
                    <Container>
                        <Button>Delete</Button>
                    </Container>
            </Cardbody>
        </Card>
    )
}