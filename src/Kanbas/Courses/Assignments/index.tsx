import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaThLarge } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import assignments from "../../Database/assignments.json";
import { FaPlus } from "react-icons/fa6";
import { FaCaretDown, FaFileSignature } from "react-icons/fa";
function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>

            <span style={{ float: 'right', display: 'flex', gap: '10px' }}>
                <label htmlFor="myInput"></label>
                <input type="text" placeholder="Search for Assignment" />
                <button>+ Group</button>
                <button style={{backgroundColor:'red', color:'white'}}>+ Assignment</button>
                <button type="button" className="btn btn-outline-dark" style={{ borderRadius: '0%', maxHeight: 'fit-content' }}><FaEllipsisV /></button>
            </span>
            <br /><hr />
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2" /><FaCaretDown /> ASSIGNMENTS
                        <span className="float-end">
                            <button style={{borderRadius: '25px', width: 'max-content', borderStyle:'solid'}}>
                                <span style={{paddingLeft: '2px', paddingRight: '3px'}}>40% of
                                                Total</span></button>
                            <FaPlus  className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group" style={{width:"100%"}}>
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item">
                                <FaEllipsisV className="me-2" />
                                <FaFileSignature className="me-2" style={{color:"green"}}/>
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{textDecoration:'none', color:'black', fontWeight:'bold'}}>{assignment.title}</Link>
                                    <footer style={{paddingLeft:'5%'}}><span style={{color:'red'}}>Multiple Modules</span> |<span style={{color:'black', fontWeight:'bold'}}> Due</span> {assignment.due} | 100pts</footer>
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                            </li>))}
                    </ul>
                </li>
            </ul>
        </>
    );
}
export default Assignments;
