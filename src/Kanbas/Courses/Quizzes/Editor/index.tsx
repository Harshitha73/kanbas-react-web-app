import Details from "./Details";
import QuizNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router";
import Questions from "./Questions";
import { Nav } from "react-bootstrap";

function QuizEditor() {
  return (
    <>
      <div>
        <span>Points 0 </span>
        <span>Not Published </span>
        <span>... </span>
      </div>

      <div className="d-flex">
        <Details />
      </div>
    </>
  );
}
export default QuizEditor;
