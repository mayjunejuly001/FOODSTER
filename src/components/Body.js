import RestroCard from './RestroCard'
import { useEffect, useState } from 'react'
import { ShimmerUI } from './ShimmerUI.JS'

const Body = () => {
  //local state variable-super powerful variable
  const [listofRestaurants, setlistofRestaurants] = useState([])
  const [filteredRestaurant, setFilteredRestaurant] = useState([])

  const [searchText, setsearchText] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    )

    const json = await data.json()

    console.log(json)
    setlistofRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
  }

  return listofRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            className='search-box'
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value)
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )

              setFilteredRestaurant(filteredRestaurant)

              console.log(searchText)
            }}
          >
            Search
          </button>
        </div>
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
        {filteredRestaurant.map((restaurant) => (
          <RestroCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Body
