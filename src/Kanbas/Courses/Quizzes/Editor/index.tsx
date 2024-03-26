import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Details from "./Details";
import Questions from "./Questions";
import { FcCancel } from "react-icons/fc";
import { FaEllipsisV } from "react-icons/fa";
function QuizEditor() {
  const [activeTab, setActiveTab] = useState("Details");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div style={{ justifyContent:"flex-end", display:"flex", gap:"2%"}}>
        <span>Points  0</span>
        <span><FcCancel /> Not Published</span>
        <span><button style={{backgroundColor:"lightgray", borderColor:"black", borderWidth:"1px"}}><FaEllipsisV/></button></span>
      </div>
      <hr/>
      <div className="d-flex">
        <Nav variant="tabs" defaultActiveKey="Details" className="w-100">
          <Nav.Item>
            <Link
              to=""
              onClick={() => handleTabChange("Details")}
              className={`nav-link ${activeTab === "Details" ? "active" : ""}`}
            >
              Details
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              to=""
              onClick={() => handleTabChange("Questions")}
              className={`nav-link ${activeTab === "Questions" ? "active" : ""}`}
            >
              Questions
            </Link>
          </Nav.Item>
        </Nav>
      </div>

      {activeTab === "Details" && <Details />}
      {activeTab === "Questions" && <Questions />}
    </>
  );
}

export default QuizEditor;
