import { ShimmerUI } from './ShimmerUI.JS'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../Utils/useRestaurantMenu'
import RestaurantCatogory from './RestaurantCategory'
import { useState } from 'react'

const RestaurantMenu = () => {
  const { resId } = useParams()
  const resInfo = useRestaurantMenu(resId)

  const [showIndex , setShowIndex] = useState(0)

  if (resInfo === null) return <ShimmerUI />

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ||
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.categories[0]

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    )

  // console.log(categories)
  return (
    <div className='text-center'>
      <h1 className='font-bold my-6 text-2xl '>{name}</h1>
      <h3 className='font-bold '>
        {cuisines.join(' , ')} - {costForTwoMessage}
      </h3>
      {categories.map((category , index) => (
        <RestaurantCatogory
          key={category?.card?.card?.title}
          data={category.card.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))} 
    </div>
  )
}

export default RestaurantMenu
