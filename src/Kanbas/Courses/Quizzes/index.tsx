import React from "react";
import { FaCaretDown, FaEllipsisV } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { KanbasState } from "../../store";
function Quizzes() {
    const { courseId } = useParams();
    const navigate = useNavigate();

    function addQuizEvent() {
        navigate(`/Kanbas/Courses/${courseId}/Quizzes/Editor`);
    }
    return (
        <>
            <input type="text" placeholder="Search for Quiz" className="float-start" />
            <span style={{ float: 'right', display: 'flex', gap: '10px' }}>
                <button style={{ backgroundColor: 'red', color: 'white', border: "none" }} onClick={addQuizEvent}>+ Quiz</button>
                <button type="button" className="btn btn-outline-dark" style={{ borderRadius: '0%', maxHeight: 'fit-content' }}><FaEllipsisV /></button>
            </span>
            <br /><hr />
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaCaretDown /> Assignment Quizzes
                    </div>
                    
                </li>
            </ul>
        </>
    );
}
export default Quizzes;