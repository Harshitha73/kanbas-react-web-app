import React from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";


function Questions() {
    const navigate = useNavigate();
    const { courseId } = useParams();
    function cancelEvent() {
        console.log("cancel");
        navigate(`/Kanbas/Courses/${courseId}/Quizzes`);
    }

    function addQuestionEvent() {
        console.log("add question");
        navigate(`/Kanbas/Courses/${courseId}/Quizzes/Editor/Questions/Editor`)
    }
    function addQuestionGroupEvent() {
        console.log("add question group");
    }
    function findQuestionEvent() {
        console.log("find questions");
    }

    function publishEvent() {
        console.log("publish");
    }
    function saveEvent() {
        console.log("save");
    }
    return (
        <>
            <div>
                <span>No questions so far</span>
                <div style={{ paddingTop: "30%", justifyContent: "flex-end", display: "flex", gap: "1%" }}>
                    <button style={{ backgroundColor: 'lightgrey', color: 'black', borderRadius: "0%", borderColor: "black" }} onClick={addQuestionEvent} className="btn">+ New Question</button>
                    <button style={{ backgroundColor: 'lightgrey', color: 'black', borderRadius: "0%", borderColor: "black" }} onClick={addQuestionGroupEvent} className="btn">+ New Question Group</button>
                    <button style={{ backgroundColor: 'lightgrey', color: 'black', borderRadius: "0%", borderColor: "black" }} onClick={findQuestionEvent} className="btn"><CiSearch />  Find Questions</button>
                </div>
                <hr />
                <input type="checkbox" id="changeQuiz" />
                <label htmlFor="changeQuiz" style={{ paddingLeft: "1%" }}>
                    Notify users this quiz has changed
                </label>
                <div style={{ justifyContent: "flex-end", display: "flex", gap: "1%" }}>
                    <button style={{ backgroundColor: 'lightgrey', color: 'black', borderColor: "black" }} onClick={cancelEvent} className="btn">Cancel</button>
                    <button style={{ backgroundColor: 'lightgrey', color: 'black', borderColor: "black" }} onClick={publishEvent} className="btn">Save & Publish</button>
                    <button style={{ backgroundColor: 'red', color: 'white' }} onClick={saveEvent} className="btn">Save</button>
                </div>
                <hr />
            </div>
        </>
    );
}
export default Questions;