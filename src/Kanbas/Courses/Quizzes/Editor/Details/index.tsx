import React from "react";

import { useNavigate, useParams, Link } from "react-router-dom";
import { KanbasState } from "../../../../store";
import { setAssignment } from "../../../Assignments/reducer";
import { useDispatch, useSelector } from "react-redux";
import { addQuiz, setQuiz, updateQuiz } from "../../reducer";
import { useEffect } from "react";

function Details() {
    
  const { courseId } = useParams();
  const {quizId} = useParams();

    const assignment = useSelector(
        (state: KanbasState) => state.assignmentsReducer.assignment
      );

      const quizList = useSelector(
        (state: KanbasState) => state.quizzesReducer.quizzes
      );
      

      //USE EFFECT
      useEffect(() => {
        if (quizId !== undefined) {
          if (quizId.localeCompare("Editor")) {
            const a = quizList.find(
              (quiz) => quiz._id === quizId
            );
            dispatch(setQuiz(a));
          } else {
            dispatch(
              setQuiz({
                _id: "",
                title: "New Quizz",
                description: "New Quizz Description",
                due: "2024-10-10",
              })
            );
          }
        }
      }, []);



      //QUIZ
      
      const quiz = useSelector(
        (state: KanbasState) => state.quizzesReducer.quiz
      );
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const handleSave = () => {
        if (quizId !== undefined) {
          if (!quizId.localeCompare("Editor")) {
            dispatch(addQuiz({...quiz,course: courseId})
            
                );
          } else {
            dispatch(updateQuiz(quiz));
          }
        }
        navigate(`/Kanbas/Courses/${courseId}/Quizzes`);
      };


 return (
   <>
     <div className="container">
       <h2>Details</h2>
       <input
         value={quiz?.title}
         className="form-control mb-2"
         onChange={(e) =>
           dispatch(setQuiz({ ...quiz, title: e.target.value }))
         }
       />
       <input
         value={quiz?.description}
         className="form-control mb-2"
         onChange={(e) =>
           dispatch(
             setQuiz({ ...quiz, description: e.target.value })
           )
         }
       />
       
       <br/>



       <div className="row">
         <label htmlFor="assign" className="col-sm-2">
           Assign
         </label>
         <div className="col-sm-8">
           <div className="border p-2">
             <label>
               <b>Assign to</b>
             </label>
             <br />
             <input className="form-control" value="Everyone" />
             <br />
             <label>
               <b>Due</b>
             </label>
             <input
               className="form-control"
               type="date"
               value={quiz?.due}
               onChange={(e) =>
                 dispatch(setQuiz({ ...quiz, due: e.target.value }))
               }
             />
             <br />
             <div className="row">
               <div className="col-md-6">
                 <label>
                   <b>Available from</b>
                 </label>
                 <input className="form-control" type="date" value={quiz?.due} onChange={(e) => dispatch(setQuiz({ ...assignment, due: e.target.value }))}/>
            
               </div>
               <div className="col-md-6">
                 <label>
                   <b>Until</b>
                 </label>
                 <input className="form-control" type="date" />
               </div>
             </div>
             <br />
             <button
               className="btn rounded-0"
               style={{ backgroundColor: "lightgrey", width: "100%" }}
             >
               <i className="fa fa-plus" style={{ paddingRight: "2px" }}></i>Add
             </button>
           </div>
         </div>
       </div>
       <br/><br/>

<div className="row" style={{ display: "inline-flexbox" }}>
         <label className="col-sm-2" >
          Quiz Type
         </label>
         <select className="form-select col-sm-8" style={{ width: "65%" }}>
           <option selected>Graded Quiz</option>
           <option selected>Practice Quiz</option>
           <option selected>Graded Survey</option>
           <option selected>Ungraded Survey</option>
         </select>
       </div>
       <br/>
       
       <div className="row">
         <label htmlFor="points" className="col-sm-2">
           Points
         </label>
         <div className="col-sm-8">
           <input
             type="text"
             className="form-control"
             id="points"
             value="100"
           />
         </div>
       </div>
       <br/>


       <div className="row" style={{ display: "inline-flexbox" }}>
         <label className="col-sm-2" >
          Assignment Group
         </label>
         <select className="form-select col-sm-8" style={{ width: "65%" }}>
           <option selected>Quizes</option>
           <option selected>Exams </option>
           <option selected>Assignments</option>
           <option selected>Project</option>
         </select>
       </div>
       <br/>

       <div className="row" style={{ display: "inline-flexbox" }}>
         <label className="col-sm-2" ></label>
         <div className="col-sm-8">
         <input type="checkbox" id="shuffle" />
           <label htmlFor="shuffle">
             Shuffle answers
           </label>
         </div>
       </div>
       <br/>

       <div className="row" style={{ display: "inline-flexbox" }}>
         <label className="col-sm-2" ></label>
         <div className="col-sm-8">
         <input type="checkbox" id="time" />
           <label htmlFor="time">
             Time limit
           </label>
           <input type="text" id="mins"/>
           <label htmlFor="mins">
             Minutes
           </label>
         </div>
       </div>
       <br/>


       <div className="row" style={{ display: "inline-flexbox" }}>
         <label className="col-sm-2" ></label>
         <div className="col-sm-8  border p-2">
         <input type="checkbox" id="shuffle" />
           <label htmlFor="shuffle">
             Allow Multiple attempts
           </label>
         </div>
       </div>
       <br/>



       <div className="row" style={{ display: "inline-flexbox" }}>
         <label className="col-sm-2" ></label>
         <div className="col-sm-8  border p-2">
         <input type="checkbox" id="shuffle" />
           <label htmlFor="shuffle">
             Let Students See Their Quiz Responses
           </label>
         </div>
       </div>
       <br/>




       <hr />
       <div className="d-flex">
         <div>
           <input type="checkbox" id="notify" />
           <label htmlFor="notify">
             Notify users that this content has changed
           </label>
           <br />
         </div>
       </div>
       <button onClick={handleSave} className="btn btn-success ms-2 float-end">
         Save
       </button>
       <Link
         to={`/Kanbas/Courses/${courseId}/Quizzes`}
         className="btn btn-danger float-end"
       >
         Cancel
       </Link>
     </div>
   </>
 );
}
export default Details;