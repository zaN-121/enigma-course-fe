import { Button,  ButtonGroup, Col } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import useDelete from "../../../../hooks/useDelete";
import {deleteCourse, downloadCourseFile} from "../../../../service/courseService";

const CourseItem = ({title, description, level, duration, id, setReaload, fileLink}) => {
    const {onDelete, loading} = useDelete(deleteCourse, {
        onError: (e) => console.log(e),
        onSuccess: () => setReaload(true),
    })

    const onDownload = () => {
        const path = fileLink?.split("/")
        const filename = path[path.length-1]

        downloadCourseFile(filename)
    }
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
                <Button variant="primary" onClick={() => navigate(`/edit-course`, {state: {id}})}>Edit</Button>
                <Button variant="danger" disabled={loading} onClick={() => onDelete(id)}>Delete</Button>
                <Button variant="secondary" onClick={onDownload}>Download</Button>
            </ButtonGroup>
        </>
    )
}

export default CourseItem;