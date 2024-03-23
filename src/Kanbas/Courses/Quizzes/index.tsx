import React from "react";
import {FaEllipsisV} from "react-icons/fa";
function Quizzes() {
    
    return (
        <>

            <span style={{ float: 'right', display: 'flex', gap: '10px' }}>
                <label htmlFor="myInput"></label>
                <input type="text" placeholder="Search for Quiz" />
                <button style={{backgroundColor:'red', color:'white'}} >+ Quiz</button>
                <button type="button" className="btn btn-outline-dark" style={{ borderRadius: '0%', maxHeight: 'fit-content' }}><FaEllipsisV /></button>
            </span>
            <br /><hr />
            
        </>
    );
}
export default Quizzes;