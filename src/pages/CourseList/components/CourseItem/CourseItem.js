import { Button,  ButtonGroup, Col } from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const CourseItem = ({title, description, level, duration, id}) => {
    const navigate = useNavigate()
    return (
        <>
            <Col>
                <h3>Title: {title}</h3>
                <p>Description: {description}</p>
                <p>Level: {level}</p>
                <p>Duration: {duration}</p>
            </Col>
            <ButtonGroup>
                <Button variant="primary" onClick={() => navigate(`/edit-course`, {state: {key: id}})}>Edit</Button>
                <Button variant="danger">Delete</Button>
                <Button variant="secondary">Download</Button>
            </ButtonGroup>
        </>
    )
}

export default CourseItem;