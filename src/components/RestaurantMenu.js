import { useEffect, useState } from 'react'
import { ShimmerUI } from './ShimmerUI.JS'
import { useParams } from 'react-router-dom'
import { MENU_API } from './Constants'

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null)

  const {resId} = useParams()
  console.log(resId);

  useEffect(() => {
    fetchMenu()
  }, [])

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId)
      const json = await data.json()
      setResInfo(json.data)
      console.log(json)
    } catch (error) {
      console.error('Error fetching menu:', error)
      // Handle errors (show an error message, retry the request, etc.)
    }
  }
  if (resInfo === null) return <ShimmerUI />

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ||
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]

  
  console.log(itemCards)
  
  return (
    <div className='menu'>
      <h1>{name}</h1>
      <h3>
        {cuisines.join(' , ')} - {costForTwoMessage}
      </h3>

      <h1>Menu</h1>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹{Math.trunc(item.card.info.price / 100 || item.card.info.defaultPrice /100)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RestaurantMenu
