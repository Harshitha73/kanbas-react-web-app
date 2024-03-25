import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import QuizEditor from "./Quizzes/Editor";
import Quizzes from "./Quizzes";
import Grades from "./Grades";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem, Navbar } from "react-bootstrap";
import "./index.css";
import { PiEyeglassesLight } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";
import SmallNavigation from "../Navigation/smallNav";
import QuizEditor from "./Quizzes/Editor";
function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const location = useLocation();
  const course = courses.find((course) => course._id === courseId);
  const paths = location.pathname.split("/");

// Get the second-to-last item (index -2) or handle cases where there may not be enough segments
const secondToLastSegment = paths.length >= 2 ? paths[paths.length - 2] : '';

  // Get the last path in the URL
  const lastPath = paths[paths.length - 1];

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div className="flex-fill d-sm-block d-md-none d-lg-none"
          style={{paddingTop: '2%', backgroundColor: 'black', color: 'white', textAlign: 'center', height: '8%'}}>
          {lastPath}
          
          <div className="dropdown" style={{ position: "relative" }}>
          <button onClick={toggleDropdown} className="dropbtn">
            <FaCaretDown />
          </button>
          {dropdownOpen && <SmallNavigation />}
        <div
          className="dropdown"
          style={{ position: "relative", display: dropdownOpen ? "none" : "block" }}
        >
        </div>
      </div>
      </div>
        {!dropdownOpen && (
      <div className="d-none d-md-block">
      <div className="d-flex align-items-center custom-breadcrumb-item">
        <Breadcrumb className="custom-crumb">
          <BreadcrumbItem><HiMiniBars3/>   <span>{course?.name}</span></BreadcrumbItem>
          {secondToLastSegment === 'Assignments' ? (
    <>
      <BreadcrumbItem><span style={{color:'black'}}>{secondToLastSegment}</span></BreadcrumbItem>
      <BreadcrumbItem>
      <span style={{color:'black'}}>{lastPath}</span>
      </BreadcrumbItem>
    </>
  ) : (
    <BreadcrumbItem>
      <span style={{color:'black'}}>{lastPath}</span>
    </BreadcrumbItem>
  )}
  
</Breadcrumb>
        <span style={{marginLeft: 'auto', width: 'max-content', boxSizing:"unset"}}><button style={{width: 'max-content'}}><PiEyeglassesLight style={{paddingRight:'2px'}}/>Student View</button></span>
      </div>
      <hr/> 
      
      </div>
       )}
      <div className="d-flex">
      <CourseNavigation />
        <div className="flex-grow-1 bottom-0 end-0"
          style={{ left: "320px", top: "50px", height:"100%"}} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="ZoomMeetings" element={<h1>Zoom Meetings</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
            <Route path="Quizzes" element={<Quizzes/>} />
            <Route path="Quizzes/:quizId" element={<QuizEditor/>} />
            <Route path="Grades" element={<Grades/>} />
            <Route path="People" element={<h1>People</h1>} />
            <Route path="PanoptoVideo" element={<h1>Panopto Video</h1>} />
            <Route path="Discussions" element={<h1>Discussions</h1>} />
            <Route path="Announcements" element={<h1>Announcements</h1>} />
            <Route path="Pages" element={<h1>Pages</h1>} />
            <Route path="Files" element={<h1>Files</h1>} />
            <Route path="Rubrics" element={<h1>Rubrics</h1>} />
            <Route path="Outcomes" element={<h1>Outcomes</h1>} />
            <Route path="Collaborations" element={<h1>Collaborations</h1>} />
            <Route path="Syllabus" element={<h1>Syllabus</h1>} />
            <Route path="Settings" element={<h1>Settings</h1>} />
          </Routes>
      </div>
      </div>
    </div>
  );
}
export default Courses;