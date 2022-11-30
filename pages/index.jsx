import Head from 'next/head'
import Image from 'next/image'

import categoryCard from './api/categoryCard'
import trendingProductCard from './api/trending-product-card'

import CategoryCard from "../components/category-card"
import Slidr from '../components/slider'
import Heading from '../components/global/headingTitle'
import TrandingProductCard from '../components/tendign-product-card'
import Bannar from '../components/bannar'
import SocialService from '../components/social-service'
import BestProducts from '../components/best-products'

export default function Home() {
  return (
      <div>
          <Slidr/>
          <div className="py-5">
              <div className='container'>
                <div className="pb-3">
                <Heading  hOne="Top Categories" pragraph="Categories" />
                </div>
                  {categoryCard.map((item)=>(
                    <CategoryCard name= {item.name} Img={item.img} />
                  ))}
              </div>
          </div>

          <div className="py-5">
              <div className='container'>
                  <div className="pb-3">
                      <Heading  hOne="Trending Products" pragraph="Categories" />
                  </div>
                 <div>
                 {trendingProductCard.map((item)=>(
                     <TrandingProductCard title={item.title} newPrice={item.newPrice} oldPrice={item.oldPrice} img={item.img} />     
                  ))}
                 </div>
              </div>
          </div>

          <div>
              <div className="container">
                  <Bannar/>
              </div>
          </div>
          <div className="py-5">
               <BestProducts/>
          </div>
          <div className="py-5">
              <SocialService/>
          </div>
    </div>
  )
}
