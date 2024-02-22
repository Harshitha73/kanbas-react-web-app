import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaCreativeCommons } from "react-icons/fa";
import { RiInbox2Fill } from "react-icons/ri";
import { LuClock8 } from "react-icons/lu";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
function KanbasNavigation() {
  const links = [
    { label: "Account", icon: <FaRegUserCircle className="fs-2 wd-account" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox", icon: <RiInbox2Fill className="fs-2" /> },
    { label: "History", icon: <LuClock8 className="fs-2" /> },
    { label: "Studio", icon: <MdOutlineOndemandVideo className="fs-2" /> },
    { label: "Commons", icon: <FaCreativeCommons className="fs-2" /> },
    { label: "Help", icon: <IoMdHelpCircleOutline className="fs-2" /> },
    { label: "Exit Kanbas", icon: <FaArrowLeftLong className="fs-2" />, url: "/" }
  ];
  const { pathname } = useLocation();
  return (
        <ul className="wd-kanbas-navigation d-none d-md-block">
      <li>
        <Link to="http://northeastern.edu">
          <img src={process.env.PUBLIC_URL + "/images/NEU.png"} alt="NEU" />
        </Link>
      </li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={link.url ||`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;