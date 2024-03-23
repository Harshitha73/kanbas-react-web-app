import React from "react";
import {FaEllipsisV} from "react-icons/fa";
function Quizzes() {
    
    return (
        <>
            <input type="text" placeholder="Search for Quiz" className="float-start"/>
            <span style={{ float: 'right', display: 'flex', gap: '10px' }}>
                <button style={{backgroundColor:'red', color:'white', border:"none"}} >+ Quiz</button>
                <button type="button" className="btn btn-outline-dark" style={{ borderRadius: '0%', maxHeight: 'fit-content' }}><FaEllipsisV /></button>
            </span>
            <br /><hr />
            
        </>
    );
}
export default Quizzes;