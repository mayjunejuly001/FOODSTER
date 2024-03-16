import { useDispatch } from 'react-redux'
import { CDN_URL } from '../Utils/constants'
import { addItem } from '../Utils/cartSlice'

const ItemList = ({ items }) => {
  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    //dispatch a action
    dispatch(addItem(item ))
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'
        >
          <div className='w-9/12 '>
            <div className='py-2'>
              <span>{item.card.info.name}</span>
              <span>- ₹{item.card.info.price / 100} </span>
            </div>
            <p className='text-xs'>{item.card.info.description}</p>
          </div>
          <div className='w-3/12 '>
            <div className='absolute'>
              <button
                className='p-2 bg-white shadow-lg mx-16 '
                onClick={() => handleAddItem(item)}
                
              >
                Add➕
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className='rounded-lg'
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList
