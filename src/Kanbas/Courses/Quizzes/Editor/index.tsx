import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, Routes, Route } from "react-router-dom";
import Details from "./Details";
import Questions from "./Questions";

function QuizEditor() {
  const [activeTab, setActiveTab] = useState("Details");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div>
        <span>Points 0 </span>
        <span>Not Published </span>
        <span>... </span>
      </div>

      <div className="d-flex">
        <Nav variant="tabs" defaultActiveKey="Details">
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
