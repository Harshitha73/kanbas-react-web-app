import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import assignments from "../../../Database/assignments.json";
import { addAssignment, setAssignment, updateAssignment } from "../reducer";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store";
import { useEffect } from "react";
function AssignmentEditor() {
  const { courseId } = useParams();
  const { assignmentId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assignment = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignment
  );
    const assignmentList = useSelector(
      (state: KanbasState) => state.assignmentsReducer.assignments
    );
    useEffect(() => {
      if (assignmentId !== undefined) {
        if (assignmentId.localeCompare("Editor")) {
          const a = assignmentList.find(
            (assignment) => assignment._id === assignmentId
          );
          dispatch(setAssignment(a));
        } else {
          dispatch(
            setAssignment({
              _id: "",
              title: "New Assignment",
              description: "New Assignment Description",
              due: "2024-10-10",
            })
          );
        }
      }
    }, []);
  
  const handleSave = () => {
    if (assignmentId !== undefined) {
      if (!assignmentId.localeCompare("Editor")) {
        dispatch(addAssignment({ ...assignment, course: courseId }));
      } else {
        dispatch(updateAssignment(assignment));
      }
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="container">
      
      <h2>Assignment Name</h2>
      <input value={assignment?.title} className="form-control mb-2"  onChange={(e) =>
              dispatch(
                setAssignment({ ...assignment, title: e.target.value })
              )
            }/>
      <input value={assignment?.description} className="form-control mb-2"  onChange={(e) =>
              dispatch(
                setAssignment({ ...assignment, description: e.target.value })
              )
            }/>
      <div className="row">
        <label htmlFor="points" className="col-sm-2">Points</label>
        <div className="col-sm-8">
          <input type="text" className="form-control" id="points" value="100" />
        </div>
      </div>
      <br />
      <div className="row" style={{ display: 'inline-flexbox' }}>
        <label className="col-sm-2" style={{ paddingRight: '16%' }}>Assignment Group</label>
        <select className="form-select col-sm-8" style={{ width: '65%' }}>
          <option selected>ASSIGNMENTS</option>
        </select>
      </div>
      <br />
      <div className="row">
        <label className="col-sm-2">Display Grade as</label>&nbsp;
        <select className="form-select col-sm-8" style={{ width: '65%' }}>
          <option selected>Percentage</option>
        </select>
      </div>
      <br />
      <div className="form-check" style={{ paddingLeft: '20%' }}>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Do not count this assignment towards the final grade
        </label>
      </div>
      <br />
      <div className="row">
        <label htmlFor="assign" className="col-sm-2">Assign</label>
        <div className="col-sm-8">
          <div className="border p-2">
            <label><b>Assign to</b></label>
            <br />
            <input className="form-control" value="Everyone" />
            <br />
            <label><b>Due</b></label>
            <input className="form-control" type="date" value={assignment?.due} onChange={(e) => dispatch(setAssignment({ ...assignment, due: e.target.value }))}/>
            <br />
            <div className="row">
              <div className="col-md-6">
                <label><b>Available from</b></label>
                <input className="form-control" type="date" />
              </div>
              <div className="col-md-6">
                <label><b>Until</b></label>
                <input className="form-control" type="date" />
              </div>
            </div>
            <br />
            <button className="btn rounded-0" style={{ backgroundColor: 'lightgrey', width: '100%' }}>
              <i className="fa fa-plus" style={{ paddingRight: '2px' }}></i>Add
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex">
        <div>
          <input type="checkbox" id="notify" />
          <label htmlFor="notify">Notify users that this content has changed</label>
          <br />
        </div>
      </div>
      <button onClick={handleSave} className="btn btn-success ms-2 float-end">
        Save
      </button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger float-end">
        Cancel
      </Link>
    </div>
  );
}
export default AssignmentEditor;