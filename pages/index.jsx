import { Fragment } from 'react'
import CategoryCard from "../components/category-card"
import TrandingProductCard from '../components/tendign-product-card'
import Banner from '../components/banner'
import SocialService from '../components/social-service'
import BestProducts from '../components/best-products'
import CustomSlider from '../components/custom-slider'
import SectionTitle from '../components/section-title'

export default function Home() {
    return (
        <Fragment>
            <CustomSlider />
            <div className="py-5">
                <div className='container'>
                    <div className="pb-3">
                        <SectionTitle hedName="Top Categories" subName="Categories"/>
                    </div>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                </div>
            </div>

            <div className="py-5">
                <div className='container'>
                    <div className="pb-3">
                        <SectionTitle hedName="Trending Products" subName="Categories"/>
                    </div>
                    <div>
                        <TrandingProductCard/>
                        <TrandingProductCard/>
                        <TrandingProductCard/>
                        <TrandingProductCard/>
                        <TrandingProductCard/>
                    </div>
                </div>
            </div>

            <div>
                <div className="container">
                    <Banner/>
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
