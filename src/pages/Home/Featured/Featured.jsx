import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle subHeading={"Check It Out"} heading={"Featured Items"} />
      <div className="md:flex justify-center items-center  pt-12 pb-20  px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>December 11, 2025</p>
          <p className="uppercase">Where I found this?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            impedit hic minus provident tempora ex consequatur ullam totam
            excepturi. In, deserunt modi suscipit officiis voluptatum ab sed
            vitae repudiandae voluptates?
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Please Order{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
