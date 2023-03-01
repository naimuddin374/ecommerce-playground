import { Fragment } from 'react'
import CategoryCard from "../components/category-card"
import TrandingProductCard from '../components/tendign-product-card'
import Banner from '../components/banner'
import SocialService from '../components/social-service'
import BestProducts from '../components/best-products'
import CustomSlider from '../components/custom-slider'
import SectionTitle from '../components/section-title'

import CategoryCardImgA from "../assets/img/545245.png"
import useData from '../hooks/useData'


export default function Home() {

    const { loading, data: categories } = useData('/categories');

    if (loading) {
        return (
            <div className="modal-area">
                <div className='row p-4'>
                    Loading...
                </div>
            </div>
        )
    }

    return (
        <Fragment>
            <CustomSlider />
            <div className="py-5">
                <div className='container'>
                    <div className="pb-3">
                        <SectionTitle hedName="Top Categories" subName="Categories" />
                    </div>
                    {loading ? <h1>Loading...</h1> : categories.length > 0 && <>
                        {categories.map(row => <CategoryCard key={row._id} imgName={CategoryCardImgA} title={row.name} />)}
                    </>}
                </div>
            </div>

            <div className="py-5">
                <div className='container'>
                    <div className="pb-3">
                        <SectionTitle hedName="Trending Products" subName="Categories" />
                    </div>
                    <div>
                        <TrandingProductCard />
                        <TrandingProductCard />
                        <TrandingProductCard />
                        <TrandingProductCard />
                        <TrandingProductCard />
                    </div>
                </div>
            </div>

            <div>
                <div className="container">
                    <Banner />
                </div>
            </div>

            <div className="py-5">
                <div className='container'>
                    <div className="">
                        <SectionTitle hedName="Best Selling Products" subName="Nest" />
                    </div>
                    <BestProducts />
                </div>
            </div>

            <div className="py-5">
                <SocialService />
            </div>
        </Fragment>
    )
}
