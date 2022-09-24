import { NavLink, useParams } from "react-router-dom";
import "./css/sidebar.css";

function Sidebar() {
  const handleclick = (e) => {};
  let { category } = useParams();

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES </span>
        <ul className="sidebarList">
          <li className="sidebarListItem" onClick={(e) => handleclick(e)}>
            <NavLink
              to="/doctorList/All"
              className={({ isActive }) =>
                isActive ? "link-active sidebarItem" : "link sidebarItem "
              }
            >
              All
            </NavLink>
          </li>
          <li className="sidebarListItem" onClick={(e) => handleclick(e)}>
            {/* Dental */}
            <NavLink
              to="/doctorList/Dental"
              className={({ isActive }) =>
                isActive ? "link-active sidebarItem" : "link sidebarItem "
              }
            >
              Dental
            </NavLink>
          </li>
          <li className="sidebarListItem" onClick={(e) => handleclick(e)}>
            {/* Dietetics and Nutrition */}
            <NavLink
              to="/doctorList/DieteticsandNutrition"
              className={({ isActive }) =>
                isActive ? "link-active sidebarItem" : "link sidebarItem "
              }
            >
              Dietetics and Nutrition
            </NavLink>
          </li>
          <li className="sidebarListItem" onClick={(e) => handleclick(e)}>
            {/* Neurology */}
            <NavLink
              to="/doctorList/Neurology"
              className={({ isActive }) =>
                isActive ? "link-active sidebarItem" : "link sidebarItem "
              }
            >
              Neurology
            </NavLink>
          </li>
          <li className="sidebarListItem" onClick={(e) => handleclick(e)}>
            {/* Neurology */}
            <NavLink
              to="/doctorList/Orthopaedics"
              className={({ isActive }) =>
                isActive ? "link-active sidebarItem" : "link sidebarItem "
              }
            >
              Orthopaedics
            </NavLink>
          </li>
          <li className="sidebarListItem" onClick={(e) => handleclick(e)}>
            {/* Neurology */}
            <NavLink
              to="/doctorList/Ophthalmology"
              className={({ isActive }) =>
                isActive ? "link-active sidebarItem" : "link sidebarItem "
              }
            >
              Ophthalmology
            </NavLink>
          </li>
          <li className="sidebarListItem" onClick={(e) => handleclick(e)}>
            {/* Neurology */}
            <NavLink
              to="/doctorList/Paediatrics"
              className={({ isActive }) =>
                isActive ? "link-active sidebarItem" : "link sidebarItem "
              }
            >
              Paediatrics
            </NavLink>
          </li>
          <li className="sidebarListItem" onClick={(e) => handleclick(e)}>
            {/* Neurology */}
            <NavLink
              to="/doctorList/Physiotherapy"
              className={({ isActive }) =>
                isActive ? "link-active sidebarItem" : "link sidebarItem "
              }
            >
              Physiotherapy
            </NavLink>
          </li>
          <li className="sidebarListItem" onClick={(e) => handleclick(e)}>
            {/* Neurology */}
            <NavLink
              to="/doctorList/PlasticSurgery"
              className={({ isActive }) =>
                isActive ? "link-active sidebarItem" : "link sidebarItem "
              }
            >
              Plastic Surgery
            </NavLink>
          </li>
          <li className="sidebarListItem" onClick={(e) => handleclick(e)}>
            {/* Neurology */}
            <NavLink
              to="/doctorList/Radiology"
              className={({ isActive }) =>
                isActive ? "link-active sidebarItem" : "link sidebarItem "
              }
            >
              Radiology
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
