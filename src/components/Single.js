import "./css/single.css";
import PostDetails from "./PostDetails.js";

import Sidebar from "./Sidebar.js";

function Single() {
  return (
    <div className="singlepost">
      <PostDetails />
      <Sidebar />
    </div>
  );
}

export default Single;
