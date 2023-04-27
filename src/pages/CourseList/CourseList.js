import { Button, Container } from "react-bootstrap"
import EmptyList from "../../components/EmptyList/EmptyList"
import CourseItem from "./components/CourseItem/CourseItem"
import { StyledListGroup } from "./CourseList.styled"
import {useNavigate} from "react-router-dom";

const ListItem = ({data}) => {
    return (
        <StyledListGroup>
            {data.map((course, index) => {
                return (
                    <CourseItem
                        title={course.title}
                        description={course.description}
                        level={course.level}
                        duration={course.duration}
                        id={index}
                    />
                )
            })}
        </StyledListGroup>
    )
}

const CourseList = ({courses, setIsLogedIn}) => {
    const navigate = useNavigate()
    return (
        <Container>
            <h1>Course List Page</h1>
            <Button variant="success" onClick={() => navigate("/add-course/")}>Add Course</Button>
            {courses.length > 0 ? <ListItem data={courses} /> : <EmptyList text="Data masih kosong" />}
            <Button variant={"danger"} onClick={() => {setIsLogedIn(false); navigate('/login')}}>Lougout</Button>
        </Container>
    )
}

export default CourseList