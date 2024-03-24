import React, { useState } from "react";
import { FaCaretDown, FaCaretUp, FaCheckCircle, FaEllipsisV, FaFileSignature, FaTimesCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { KanbasState } from "../../store";
import { deleteQuiz, setQuiz, togglePublishQuiz } from "./reducer";
import { IoRocketSharp } from "react-icons/io5";
import Dropdown from 'react-bootstrap/Dropdown';
import "./index.css";
function Quizzes() {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showQuizzes, setShowQuizzes] = useState(true);
    const quizList = useSelector((state: KanbasState) => state.quizzesReducer.quizzes);
    function addQuizEvent() {
        navigate(`/Kanbas/Courses/${courseId}/Quizzes/Editor`);
    }
    const editQuizEvent = (quizId: string) => {
        navigate(`/Kanbas/Courses/${courseId}/Quizzes/quizId`);
    }
    const handleDeleteQuiz = (quizId: string) => {
        const confirmed = window.confirm("Do you want to delete?");
        if (confirmed) {
            dispatch(deleteQuiz(quizId));
        }
    };
    const handlePublishToggle = (quizId: string, published: boolean) => {
        dispatch(togglePublishQuiz({ quizId, published: !published }));
    };
    let currentDate = new Date();

// Subtract one day
currentDate.setDate(currentDate.getDate() - 1);

// Convert the new date to a string
let previousDate = currentDate.toDateString();
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
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {showQuizzes ? <FaCaretUp onClick={() => setShowQuizzes(false)} /> : <FaCaretDown onClick={() => setShowQuizzes(true)} />}
                        <span style={{ marginLeft: '5px' }}>Assignment Quizzes</span>
                    </div>
                    {showQuizzes && (
                        <>
                            {quizList.filter((quiz) => quiz.course === courseId).length === 0 ? (
                                <ul >
                                    <li className="list-group-item" style={{ textAlign: "center", borderLeftColor: "black", borderLeftWidth: "1px" }}>
                                        No Quizzes available!
                                        <br /><br />
                                        Add new quizzes using <span style={{ color: "red" }}>+Quiz</span> button above.
                                    </li>
                                </ul>
                            ) : (
                                <ul className="list-group" style={{ width: "100%" }}>
                                    {quizList.filter((quiz) => quiz.course === courseId).map((quiz) => (
                                        <li className="list-group-item" key={quiz._id} onClick={() => setQuiz(quiz)} style={{ borderLeft: quiz.published ? "3px solid green" : "1px solid black" }}>
                                            <IoRocketSharp className="me-2" style={{ color: "green" }} />
                                            <span className="float-end">
                                                <Dropdown className="float-end">
                                                    <Dropdown.Toggle className="toggle-btn">
                                                        <FaEllipsisV />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item onClick={() => editQuizEvent(quiz._id)}>Edit</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => handleDeleteQuiz(quiz._id)}>Delete</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => handlePublishToggle(quiz._id, quiz.published)}>
                                                            {quiz.published ? "Unpublish" : "Publish"}
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                {quiz.published ? <FaCheckCircle style={{ color: "green" }} /> : <FaTimesCircle style={{ color: "red" }} />} {/* Conditionally render success or cancel icon */}
                                            </span>
                                            {quiz.title}
                                            <footer style={{ paddingLeft: '5%' }}>
                                                {new Date(quiz.due) < new Date() ?
                                                    <span style={{ color: 'red' }}>Closed </span> :
                                                    new Date(quiz.due).toDateString() === previousDate ?  //this is not working
                                                        <span style={{ color: 'red' }}>Available until </span> :
                                                        <span style={{ color: 'red' }}>Multiple Dates </span>
                                                }
                                                |<span style={{ color: 'black', fontWeight: 'bold' }}> Due</span> {quiz.due} at 11:59PM | 100pts</footer>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    )}
                </li>
            </ul>
        </>
    );
}
export default Quizzes;