import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaCreativeCommons } from "react-icons/fa";
import { RiInbox2Fill } from "react-icons/ri";
import { LuClock8 } from "react-icons/lu";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
function SmallNavigation() {
  const links = [
    { label: "Account" },
    { label: "Dashboard" },
    { label: "Courses" },
    { label: "Calendar"},
    { label: "Inbox" },
    { label: "History"},
    { label: "Studio"},
    { label: "Commons"},
    { label: "Help"},
    { label: "Exit Kanbas", url: "/" }
  ];
  const { pathname } = useLocation();
  return (
        <ul style={{listStyle:"none"}}>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={link.url ||`/Kanbas/${link.label}`} style={{color:"red", textDecoration:"none"}}>{link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default SmallNavigation;