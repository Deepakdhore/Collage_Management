import React from 'react';
import { Container, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button} from "reactstrap";


const Home = () => {

const notify = () => toast("Wow so easy!");
    return (

       <div className="custom-jumbotron">

                   <Container className="display-3 text-center">
                       <h1>Learn Code with Durgesh</h1>
                       <p>This is a paragraph. Please handle carefully; first, try to consider it as an example.</p>
                        <Button color="primary"onClick={notify}>Notify!</Button>
                               <ToastContainer />

                   </Container>
       </div>

    );
};

export default Home;