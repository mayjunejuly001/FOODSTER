import { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCatogory = ({ data , showItems , setShowIndex}) => {
  // console.log(data)
  // const [showItems, setShowItems] = useState(false)

  const handleClick = () => {
    setShowIndex()
  }
  return (
    <div>
      <div className='m-auto w-1/2 bg-yellow-50 shadow-lg p-4 my-4 mx-auto '>
        <div
          className='flex justify-between cursor-pointer'
          onClick={handleClick}
        >
          <span className='font-semibold text-lg'>
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔻</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}

      </div>
    </div>
  )
}

export default RestaurantCatogory
