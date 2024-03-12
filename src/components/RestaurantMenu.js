import { ShimmerUI } from './ShimmerUI.JS'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../Utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const { resId } = useParams()
  const resInfo = useRestaurantMenu(resId) 

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
