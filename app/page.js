import React from 'react'
import HeroHeader from './components/HeroHeader'
import HomePage from './components/HomePage'
import InfiniteCarousel from './components/CraftingEleganceSection'

const page = () => {
  return (
    <div>

      <HeroHeader />
      <HomePage />
      <div class="md:grid grid-cols-2 ">
        <img alt="" src="https://img.freepik.com/premium-photo/beautiful-girl-saree_872233-135.jpg?ga=GA1.1.1909098577.1746678197&semt=ais_hybrid&w=740" className="" />
        <img alt="" src="https://img.freepik.com/premium-photo/woman-stands-front-piano-wearing-green-dress_872233-96.jpg?ga=GA1.1.1909098577.1746678197&w=740" className="" />
      </div>
      <InfiniteCarousel />
  
    </div>
  )
}

export default page