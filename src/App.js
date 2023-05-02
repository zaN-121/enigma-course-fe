import logo from './logo.svg';
import './App.css';
import AddCourse from "./pages/AddCourse/AddCourse";
import CourseList from './pages/CourseList/CourseList';
import React from 'react';
import {Route, Routes, Outlet, Navigate} from "react-router-dom";
import Login from "./pages/Login/Login";
import {set} from "react-hook-form";
import EditCourse from "./pages/EditCourse/EditCourse";
import {getToken} from "./utils/token";

const DATA = [
  {title : "Title 1", description: "Description"},
  {title: "Title 2", description: "Description"},
]

const ProtectedRoute = () => {
    if (!getToken()) {
        return <Navigate to={'/login'} replace={true} />
    }

    return (
        <>
            <Outlet />

        </>
    )
}

function App() {
  // ROUTING PAKAI STATE GAK BAGUS
  const [data, setData] = React.useState( []);
  const [isLogedIn, setIsLogedIn] = React.useState(false)


    // const [screenName, setScreenName] = React.useState("")
  // let ScreenComponent;
  // let props = {};
  //
  // switch(screenName) {
  //   case "course-list":
  //     ScreenComponent = CourseList;
  //     props = {
  //       courses: data
  //     }
  //     console.log(data)
  //     break;
  //   case "add-course":
  //     ScreenComponent = AddCourse;
  //     props = {data, setData}
  //     break;
  //   default:
  //     ScreenComponent = CourseList;
  //     props = {
  //       courses: data
  //     }
  //     console.log(data)
  //
  //     break;
  // }
  //
  // const onNavigate = (screenName) => {
  //   setScreenName(screenName);
  // }
  // END ROUTING PAKAI STATE


  return (
      <div>
          <Routes>
              <Route element={<Login setIsLogedIn={setIsLogedIn} />} path={"/login"}/>
              <Route element={<ProtectedRoute isLogedIn={isLogedIn}/>}>
                  <Route index={true} element={<CourseList courses={data} setIsLogedIn={setIsLogedIn}/>} path={'/course-list'} />
                  <Route  element={<AddCourse data={data} setData={setData}/>} path={'/add-course'}/>
                  <Route element={<EditCourse data={data} setData={setData} />} path={'/edit-course'}/>
              </Route>
              <Route path="*" element={<h1>Page not Found</h1>}/>
          </Routes>
      </div>

  );
}

export default App;
