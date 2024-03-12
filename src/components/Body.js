import RestroCard from './RestroCard'
import { useEffect, useState } from 'react'
import { ShimmerUI } from './ShimmerUI.JS'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../Utils/useOnlineStatus'

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
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
  }

  const onlineStatus = useOnlineStatus()
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    ); ``


  return !listofrestaurants || listofrestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className='body'>
      <div className=' flex '>
        <div className='search  p-0 '>
          <input
            type='text'
            className='border border-solid border-black'
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value)
            }}
          />
          <button className='px-4 py-2 bg-yellow-50 m-4 rounded-lg '
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
        </div >
        <div >
          <button
            className='px-4 py-2 bg-yellow-50 m-4 rounded-lg'
            onClick={() => {
              //write a filter logic
              const filterlist = listofrestaurants.filter(
                (Res) => Res.info.avgRating > 4
              )
              console.log(filterlist)
              setFilteredRestaurant(filterlist)
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

      </div>
      <div className='flex flex-wrap'>
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
