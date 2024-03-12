import { CDN_URL } from '../Utils/constants'

const RestroCard = (props) => {
  const { resData } = props

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info

  return (
    <div className='m-4 p-4 w-[250px] bg-yellow-100  rounded-lg hover:bg-yellow-400 '>
      <img
        className=' rounded-lg'
        src={CDN_URL + cloudinaryImageId} 
        alt='res-logo'
      />
      <h4 className='font-bold py-2 text-lg'>{name}</h4>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} Avg Rating</h4>
      <h4>{costForTwo}</h4>
    </div>
  )
}

export default RestroCard
