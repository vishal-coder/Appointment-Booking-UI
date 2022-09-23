import "./css/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="sidebarTitle">ABOUT ME</div>
        <img
          className="sidebarImg"
          src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Profile Picture"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          quia consequatur esse temporibus quisquam corporis voluptas obcaecati
          optio debitis est, eaque reiciendis at nam qui ratione doloremque
          libero repudiandae magni!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES </span>
        <ul className="sidebarList">
          <li className="sidebarListItem">StartUP</li>
          <li className="sidebarListItem">Environmental</li>
          <li className="sidebarListItem">Health</li>
          <li className="sidebarListItem">Farmers</li>
          <li className="sidebarListItem">Tree Plantation</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
