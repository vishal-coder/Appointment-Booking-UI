import "./css/post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postimg"
        src="https://images.pexels.com/photos/6348119/pexels-photo-6348119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Donate Image"
      />
      <div className="postinfo">
        <div className="postcat">
          <div>Mediclaim</div>
          <div className=" "> Created on 22-09-2022</div>
        </div>
        <span className="posttitle"> this is post title with super text</span>
      </div>
      <p className="postdescription">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quam,
        vitae et quia eaque aut obcaecati ea. Sequi corporis, nam at, repellat
        placeat doloribus vitae incidunt numquam deleniti corrupti rem. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto
        dolores officiis doloremque natus delectus voluptatem quae placeat
        possimus doloribus! Optio repellendus sed saepe nihil ea, rerum expedita
        repellat obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Molestias, ipsa natus, sequi odit earum perferendis neque amet
        quam repellat adipisci, repellendus eum laborum accusamus dolor quae! At
        itaque expedita ab.
      </p>
    </div>
  );
}

export default Post;
