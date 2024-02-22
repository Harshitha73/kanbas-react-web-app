import assignments from "../../Database/assignments.json";
import users from "../../Database/users.json";
import enrollments from "../../Database/enrollments.json";
import grades from "../../Database/grades.json";
import { useParams } from "react-router-dom";
import "../../../index.css"
import { IoSearch } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { TfiImport, TfiExport } from "react-icons/tfi";
import { FaCog } from "react-icons/fa";
function Grades() {
    const { courseId } = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div style={{ paddingLeft: '2%' }}>
            <div className="row" style={{ width: '100%' }}>
                <span style={{ display: 'flex', justifyContent: 'flex-end', gap:'10px' }}>
                    <button className="wd-import-export-button"><TfiImport /> Import</button>
                    <button className="wd-import-export-button"><TfiExport/> Export<i className="fa fa-caret-down"></i></button>
                    <button className="wd-import-export-button" ><FaCog /></button>
                </span>
                <div className="col-md-5">
                    <label><b>Student Names</b></label>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm"><IoSearch /></span>
                        <input className="form-select" placeholder="Search Students" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                </div>
                <div className="col-md-5" style={{ paddingLeft: '3%' }}>
                    <label><b>Assignment Names</b></label>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm"><IoSearch /></span>
                        <input className="form-select" placeholder="Search Assignments" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                </div>
            </div>

            <button className="btn wd-import-export-button"><CiFilter /> Apply Filters</button>
            <br /><br />
            <div className="table-responsive" >
                <table className="table table-striped wd-grades-table" style={{ backgroundColor: 'lightgray', width: '96%' }}>
                    <thead>
                        <th>Student Name</th>
                        {as.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {es.map((enrollment) => {
                            const user = users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td className="border" style={{ border: '1px solid black' }}>{user?.firstName} {user?.lastName}</td>
                                    {as.map((assignment) => {
                                        const grade = grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td className="border">{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div>
        </div>);
}
export default Grades;

