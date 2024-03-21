import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from "react-bootstrap";
import { FaRegCheckCircle, FaEllipsisV} from "react-icons/fa";
function Buttons(){
return(
  <div className='d-none d-md-block'>
    <div style={{float:'right', display: 'flex', gap: '10px'}} className="wd-button">
    <Button variant="outline-secondary" style={{color:'black', backgroundColor:"lightgray"}}>Collapse All</Button>
    <Button variant="outline-secondary" style={{color:'black', backgroundColor:"lightgray"}}>View Progress</Button>
    <Dropdown>
        <Button variant="outline-secondary" style={{color:'black'}}><FaRegCheckCircle style={{paddingRight:'2px'}}/>Publish All</Button>
        <Dropdown.Toggle variant="outline-secondary" style={{color:'black'}}/>
        <Dropdown.Menu>
         <Dropdown.Item>Unpublish All</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    <Button variant="danger">+ Module</Button>{' '}
    <button type="button" className="btn btn-outline-dark"><FaEllipsisV/></button>
  </div>
  </div>
);

}
export default Buttons