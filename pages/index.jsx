
import { Fragment } from 'react'
import categoryData from './api/categoryCard'
import trendingProductCard from './api/trending-product-card'

import CategoryCard from "../components/category-card"
import Heading from '../components/heading'
import TrandingProductCard from '../components/tendign-product-card'
import Bannar from '../components/bannar'
import SocialService from '../components/social-service'
import BestProducts from '../components/best-products'
import BannerImg from "../assets/img/poster-03 1.png"
import CustomSlider from '../components/custom-slider'




export default function Home() {
    return (
        <Fragment>
            <CustomSlider />
            <div className="py-5">
                <div className='container'>
                    <div className="pb-3">
                        <Heading hOne="Top Categories" pragraph="Categories" />
                    </div>
                    {categoryData.map((item) => (
                        <CategoryCard name={item.name} Img={item.img} />
                    ))}
                </div>

                {categoryData.map((item) => (
                    <CategoryCard name={item.name} img={item.img} />
                ))}
            </div>

            <div className="py-5">
                <div className='container'>
                    <div className="pb-3">
                        <Heading hOne="Trending Products" pragraph="Categories" />
                    </div>
                    <div>
                        {trendingProductCard.map((item) => (
                            <TrandingProductCard title={item.title} newPrice={item.newPrice} oldPrice={item.oldPrice} img={item.img} />
                        ))}
                    </div>
                </div>
            </div>


            <div>
                <div className="container">
                    <Bannar buttonName={`Add To Card`} SubHeading={`Enhance Your Music Experience`} Heading={`Enhance Your Music Experience`} img={BannerImg} />
                </div>
            </div>

            <div className="py-5">
                <BestProducts />
            </div>
            <div className="py-5">
                <SocialService />
            </div>
        </Fragment>
    )
}
