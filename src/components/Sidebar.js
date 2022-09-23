import "./css/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES </span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Dental</li>
          <li className="sidebarListItem">Dietetics and Nutrition</li>
          <li className="sidebarListItem">Neurology</li>
          <li className="sidebarListItem">Neurology</li>
          <li className="sidebarListItem">Ophthalmology</li>
          <li className="sidebarListItem">Paediatrics</li>
          <li className="sidebarListItem">Physiotherapy</li>
          <li className="sidebarListItem">Plastic Surgery</li>
          <li className="sidebarListItem">Radiology</li>
          <li className="sidebarListItem">Urology</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
