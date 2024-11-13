import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <section>
      <SectionTitle
        subheading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <img src={slide1} alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src={slide2} alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src={slide3} alt="Pizza" />
        </div>

        <div className="carousel-item">
          / <img src={slide4} alt="Pizza" />
        </div>
        <div className="carousel-item">
          / <img src={slide4} alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src={slide5} alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src={slide1} alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src={slide2} alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src={slide3} alt="Pizza" />
        </div>
      </div>
    </section>
  );
};

export default Category;
