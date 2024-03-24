import { Link, useLocation } from "react-router-dom";
import "./index.css";
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