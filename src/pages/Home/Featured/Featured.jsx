import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-10">
      <SectionTitle
        heading={"Featured Item"}
        subheading={"check it out"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center gap-4 bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="">
          <p>Aug 20, 2019</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            sed minima neque? Eos tenetur autem quisquam deleniti consequatur,
            cum placeat fugiat excepturi distinctio nemo dicta architecto fugit
            facere? Animi perferendis nostrum illo mollitia nobis debitis
            minima, amet suscipit neque odit!
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
