import { Button,  ButtonGroup, Col } from "react-bootstrap";

const CourseItem = ({title, description, level, duration}) => {
    return (
        <>
            <Col>
                <h3>Title: {title}</h3>
                <p>Description: {description}</p>
                <p>Level: {level}</p>
                <p>Duration: {duration}</p>
            </Col>
            <ButtonGroup>
                <Button variant="primary">Edit</Button>
                <Button variant="danger">Delete</Button>
                <Button variant="secondary">Download</Button>
            </ButtonGroup>
        </>
    )
}

export default CourseItem;