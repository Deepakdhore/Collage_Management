import React from 'react';
import { Container, ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

const Menus = () => {
  return (
    <Container>
      <ListGroup>
        <Link className="list-group-item list-group-item-action" disabled>
          Menu
        </Link>
        <Link className="list-group-item list-group-item-action"
          tag={Link}
          to="/"
          action
        >
          Home
        </Link>
        <Link className="list-group-item list-group-item-action"
          tag={Link}
          to="/view-courses"
          action
        >
          View All Courses
        </Link>
        <Link className="list-group-item list-group-item-action"
          tag={Link}
          to="/add-course"
          action
        >
          Add Course
        </Link>
        <Link className="list-group-item list-group-item-action"
          tag={Link}
          to="#"
        >
          About
        </Link>
        <Link className="list-group-item list-group-item-action"
          tag={Link}
          to="#"
        >
          Contacts
        </Link>
      </ListGroup>
    </Container>
  );
}

export default Menus;
