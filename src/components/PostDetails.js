import "./css/postdetails.css";
import { PencilFill, TrashFill } from "react-bootstrap-icons";

function PostDetails() {
  return (
    <div className="postdetails">
      <div className="postdetailswrapper">
        <img
          className="singlepostimg"
          src="https://images.pexels.com/photos/3157890/pexels-photo-3157890.jpeg"
          alt="Coral Image"
        />
        <h1 className="singleposttitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laborum
          <div className="singepostedit">
            <PencilFill
              className="singlepostIcon"
              color="teal"
              style={{ marginLeft: "2rem" }}
              // onClick={() => handleDeleteProduct(product._id)}
            />
            <TrashFill
              className="singlepostIcon"
              color="tomato"
              style={{ marginLeft: "2rem" }}
              // onClick={() => handleDeleteProduct(product._id)}
            />
          </div>
        </h1>
        <div className="singlepostinfo">
          <div className="singlepostauthor">Created By :Username</div>
          <div className="singlepostdate">Created On : 22-09-2022</div>
        </div>
        <p className="singlepostdesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eum
          repudiandae voluptatum assumenda incidunt officia ex omnis molestias
          ullam, atque eveniet illum, dolores cupiditate doloribus rem? Adipisci
          ipsam ratione nobis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odit expedita cupiditate officiis numquam
          accusantium labore sed, est dolore sit iusto perferendis voluptates,
          dolorum error laboriosam modi cum explicabo aperiam ut. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Sunt possimus architecto
          impedit blanditiis labore iste numquam corporis officiis nemo illum!
          Aut possimus vitae, eos tenetur quod sunt laborum esse velit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Impedit eum
          repudiandae voluptatum assumenda incidunt officia ex omnis molestias
          ullam, atque eveniet illum, dolores cupiditate doloribus rem? Adipisci
          ipsam ratione nobis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odit expedita cupiditate officiis numquam
          accusantium labore sed, est dolore sit iusto perferendis voluptates,
          dolorum error laboriosam modi cum explicabo aperiam ut. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Sunt possimus architecto
          impedit blanditiis labore iste numquam corporis officiis nemo illum!
          Aut possimus vitae, eos tenetur quod sunt laborum esse velit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Impedit eum
          repudiandae voluptatum assumenda incidunt officia ex omnis molestias
          ullam, atque eveniet illum, dolores cupiditate doloribus rem? Adipisci
          ipsam ratione nobis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odit expedita cupiditate officiis numquam
          accusantium labore sed, est dolore sit iusto perferendis voluptates,
          dolorum error laboriosam modi cum explicabo aperiam ut. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Sunt possimus architecto
          impedit blanditiis labore iste numquam corporis officiis nemo illum!
          Aut possimus vitae, eos tenetur quod sunt laborum esse velit.
        </p>
      </div>
      PostDetails
    </div>
  );
}

export default PostDetails;
