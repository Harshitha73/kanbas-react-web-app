import ModuleList from "../Modules/List";
import { FaFileImport } from "react-icons/fa";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { BsBullseye } from "react-icons/bs";
import { IoBarChart } from "react-icons/io5";
import { ImBullhorn } from "react-icons/im";
import { FaRegBell, FaRegCalendarAlt,FaArrowRight } from "react-icons/fa";
function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <ModuleList />
                </div>
                <div className="col-3 wd-decoration d-none d-md-block">
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action list-group-item-light"><FaFileImport style={{ paddingRight: '2px' }} />Import Existing Content</a>
                        <a href="#" className="list-group-item list-group-item-action list-group-item-light"><LuArrowUpRightFromCircle style={{ paddingRight: '2px' }} />Import from Commons</a>
                        <a href="#" className="list-group-item list-group-item-action list-group-item-light"><BsBullseye style={{ paddingRight: '2px' }} />Choose Home Page</a>
                        <a href="#" className="list-group-item list-group-item-action list-group-item-light"><IoBarChart style={{ paddingRight: '2px' }} />View Course Stream</a>
                        <a href="#" className="list-group-item list-group-item-action list-group-item-light"><ImBullhorn style={{ paddingRight: '2px' }} />New Announcement</a>
                        <a href="#" className="list-group-item list-group-item-action list-group-item-light"><IoBarChart style={{ paddingRight: '2px' }} />New Analytics</a>
                        <a href="#" className="list-group-item list-group-item-action list-group-item-light"><FaRegBell style={{ paddingRight: '2px' }} />View Course Notifications</a>
                    </div>
                    <br />
                    <h4>To Do</h4>
                    <hr />
                    <a href="#">Grade A1 - ENV + HTML</a>
                    <footer >100 points. Sep 18 at 11:59PM</footer>
                    <br /><br />
                    <h5>Comping Up<span style={{ float: 'right', fontSize:'small' }}>View Calendar<FaRegCalendarAlt/></span></h5>
                    <hr />
                    <a href="#">Lecture</a>
                    <footer >CS4550.12631.202410</footer>
                    <footer>Sep 11 at 11:45AM</footer>
                    <br /><br />
                    <a href="#">CS5610 06 SP23 Lecture</a>
                    <footer >CS4550.12631.202410</footer>
                    <footer >Sep 11 at 6PM</footer>
                    <br /><br />
                    <a href="#">CS5610 Web Development Summer 1 2023 -LECTURE</a>
                    <footer>CS4550.12631.202410</footer>
                    <footer>Sep 11 at 7PM</footer>
                    <br /><br />
                    <span style={{color:'red'}}><FaArrowRight/>12 more in the next week <a className="fa fa-arrow-right"
                    ></a></span>
                </div>
            </div>
        </div>
    );
}
export default Home;

