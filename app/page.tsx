import { CustomFilter, Hero, SearchBar } from '@/components'
import ProductCard from '@/components/productCard'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home_text-container'>
          <h1 className='text-4xl font-extrabold'>Food Catalogue</h1>
          <p className='font-thin'>Explore the foods you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar />

        </div>
        <div className='home__filter-container'>
          <CustomFilter title='fuel'/>
          <CustomFilter title='year'/>
        </div>
      </div>

      <ProductCard />
    </main>
  )
}
