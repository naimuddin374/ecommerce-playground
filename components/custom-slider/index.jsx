import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import sliderImgA from "../../assets/img/banner-mockup 1.png"
import SingleItem from './single-item';
import useData from "../../hooks/useData";

function CustomSlider() {

  const { loading, data } = useData('/sliders');
  console.log(data)


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div className="py-5" id="homeSlider">
      <Slider {...settings}>

        {data && data.length > 0 && data.map(row =>
          <SingleItem
            hedName={row.name}
            subName='Hot Deal In This Week'
            btnText='Buy Now'
            buttonAction='/'
            src={sliderImgA}
          />
        )}

      </Slider>
    </div>
  );
}
export default CustomSlider