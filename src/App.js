import logo from './logo.svg';
import './App.css';
import AddCourse from "./pages/AddCourse/AddCourse";
import CourseList from './pages/CourseList/CourseList';
import React from 'react';

const DATA = [
  {title : "Title 1", description: "Description"},
  {title: "Title 2", description: "Description"},
]

function App() {
  const [data, setData] = React.useState( [])
  const [screenName, setScreenName] = React.useState("")
  let ScreenComponent;
  let props = {};

  switch(screenName) {
    case "course-list":
      ScreenComponent = CourseList;
      props = {
        courses: data
      }
      console.log(data)
      break;
    case "add-course":
      ScreenComponent = AddCourse;
      props = {data, setData}
      break;
    default:
      ScreenComponent = CourseList;
      props = {
        courses: data
      }
      console.log(data)

      break;
  }

  const onNavigate = (screenName) => {
    setScreenName(screenName);
  }

  return (
    // <div>
    //   <AddCourse />
    // </div>
    // <CourseList courses={DATA}/>
    <ScreenComponent {...props} onNavigate={onNavigate} />
  );
}

export default App;
