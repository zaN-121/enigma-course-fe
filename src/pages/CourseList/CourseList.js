import { Button, Container } from "react-bootstrap"
import EmptyList from "../../components/EmptyList/EmptyList"
import CourseItem from "./components/CourseItem/CourseItem"
import { StyledListGroup } from "./CourseList.styled"
import {useNavigate} from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import {getCourses} from "../../service/courseService";
import {deleteToken} from "../../utils/token";

const ListItem = ({data, setReload}) => {

    return (
        <StyledListGroup>
            {data.map((course, index) => {
                return (
                    <CourseItem
                        title={course.title}
                        description={course.description}
                        level={course.courseInfo.level}
                        duration={course.courseInfo.duration}
                        id={course.courseId}
                        setReaload ={setReload}
                        fileLink={course.link}
                    />
                )
            })}
        </StyledListGroup>
    )
}

const CourseList = ({setIsLogedIn}) => {
    const {data: courses, loading, error, setReload} = useQuery(getCourses, {})
    console.log(courses.data)
    const navigate = useNavigate()
    return (
        <Container>
            <h1>Course List Page</h1>
            <Button variant="success" onClick={() => navigate("/add-course")}>Add Course</Button>
            {courses.length > 0 ? <ListItem data={courses} setReload={setReload}/> : <EmptyList text="Data masih kosong" />}
            <Button variant={"danger"} onClick={() => {deleteToken(); navigate('/login')}}>Lougout</Button>
        </Container>
    )
}

export default CourseList