import RestroCard from './RestroCard'
import { useEffect, useState } from 'react'
import { ShimmerUI } from './ShimmerUI.JS'
import { Link } from 'react-router-dom'

const Body = () => {
  //local state variable-super powerful variable
  const [listofrestaurants, setlistofRestaurants] = useState([])
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
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
  }
  return !listofrestaurants || listofrestaurants.length === 0 ? (
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
              const filteredRestaurant = listofrestaurants.filter((res) =>
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
            const filterlist = listofrestaurants.filter(
              (Res) => Res.info.avgRating > 4
            )

            console.log(filterlist)
            setFilteredRestaurant(filterlist)
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className='res-container'>
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={'/restaurants/' + restaurant.info.id}
          >
            <RestroCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Body
