import resList from '../Utils/mockData'
import RestroCard from './RestroCard'
import { useState } from 'react'
import resList from '../Utils/mockData'
// import resList from '../Utils/mockData'

const Body = () => {
  //local state variable-super powerful variable
  const [listofRestaurants, setlistofRestaurants] = useState(resList)

  // normal state variable
  // let listofRestaurants1 = [
  //   {
  //     info: {
  //       id: '9052',
  //       name: 'Subway',
  //       cloudinaryImageId: '1ace5fa65eff3e1223feb696c956b38b',
  //       locality: 'Central Plaza, Kalina',
  //       areaName: 'Santacruz East',
  //       costForTwo: '₹350 for two',
  //       cuisines: ['Salads', 'Snacks', 'Desserts', 'Beverages'],
  //       avgRating: 3.8,
  //     },
  //   },
  //   {
  //     info: {
  //       id: '32399',
  //       name: "McDonald's",
  //       cloudinaryImageId: 'ee5f8e06b300efc07c9fe3f4df40dfc4',
  //       locality: 'Kalina Artista',
  //       areaName: 'Santacruz East',
  //       costForTwo: '₹400 for two',
  //       cuisines: ['Burgers', 'Beverages', 'Cafe', 'Desserts'],
  //       avgRating: 4.3,
  //     },
  //   },
  //   {
  //     info: {
  //       id: '78036',
  //       name: 'Burger King',
  //       cloudinaryImageId: 'e33e1d3ba7d6b2bb0d45e1001b731fcf',
  //       locality: 'Central Plaza, Kalina',
  //       areaName: 'Santacruz East',
  //       costForTwo: '₹350 for two',
  //       cuisines: ['Burgers', 'American'],
  //       avgRating: 4.1,
  //     },
  //   },
  // ]
  return (
    <div className='body'>
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            //write a filter logic
            const filterlist = listofRestaurants.filter(
              (res) => res.info.avgRating > 4
            )
            setlistofRestaurants(filterlist)
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className='res-container'>
        {listofRestaurants.map((restaurant) => (
          <RestroCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Body
