import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import sliderImgA from "../../assets/img/banner-mockup 1.png"
import SingleItem from './single-item';

function CustomSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="py-5" id="homeSlider">
      <Slider {...settings}>

        <SingleItem
          title='Intelectial Digital Computer 01'
          subTitle='Hot Deal In This Week'
          buttonText='Buy Now'
          buttonAction='/'
          imgSrc={sliderImgA}
        />
        <SingleItem
          title='Intelectial Digital Computer 02'
          subTitle='Hot Deal In This Week'
          buttonText='Buy Now'
          buttonAction='/'
          imgSrc={sliderImgA}
        />
        <SingleItem
          title='Intelectial Digital Computer 03'
          subTitle='Hot Deal In This Week'
          buttonText='Buy Now'
          buttonAction='/'
          imgSrc={sliderImgA}
        />
        <SingleItem
          title='Intelectial Digital Computer 04'
          subTitle='Hot Deal In This Week'
          buttonText='Buy Now'
          buttonAction='/'
          imgSrc={sliderImgA}
        />
      </Slider>
    </div>
  );
}
export default CustomSlider