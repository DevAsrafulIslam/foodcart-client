import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// Define banner images at the top level before the component
const bannerImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1543353071-087092ec393a",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
];


const Banner = () => {
  return (
    <Carousel 
      className="text-center" 
      autoPlay 
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      interval={3000}
    >
      {/* Map through the bannerImages array to create carousel items */}
      {bannerImages.map((image, index) => (
        <div key={index} className="relative h-[600px]">
          <img 
            src={image} 
            alt={`Premium food ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Exquisite Culinary Experience</h2>
            <p className="text-xl md:text-2xl max-w-3xl">Discover premium halal cuisine crafted with passion</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
