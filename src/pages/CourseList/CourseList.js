import { Button, Container } from "react-bootstrap"
import EmptyList from "../../components/EmptyList/EmptyList"
import CourseItem from "./components/CourseItem/CourseItem"
import { StyledListGroup } from "./CourseList.styled"

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
                        key={index}
                    />
                )
            })}
        </StyledListGroup>
    )
}

const CourseList = ({courses, onNavigate}) => {
    return (
        <Container>
            <h1>Course List Page</h1>
            <Button variant="success" onClick={() => onNavigate("add-course")}>Add Course</Button>
            {courses.length > 0 ? <ListItem data={courses} /> : <EmptyList text="Data masih kosong" />}
        </Container>
    )
}

export default CourseList