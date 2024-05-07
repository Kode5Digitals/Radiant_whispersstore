import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

const Banner2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="">
      <div className=" ">
        <Slider {...settings}>
          <div className="">
            <div
              className=" h-[300px] w-full bg-cover bg-center flex justify-center items-center"
              style={{ backgroundImage: 'url("bg1.jpg")' }}
            ></div>
          </div>
          <div>
            <div
              className=" h-[300px] w-full bg-cover bg-center flex justify-center items-center"
              style={{ backgroundImage: 'url("cream1.jpeg")' }}
            ></div>
          </div>
          <div>
            <div
              className=" h-[300px] w-full bg-cover bg-center flex justify-center items-center"
              style={{ backgroundImage: 'url("cream6.jpeg")' }}
            ></div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner2;
