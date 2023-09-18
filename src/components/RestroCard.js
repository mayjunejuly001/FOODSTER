import { CDN_URL } from '../Utils/constants'

const RestroCard = (props) => {
  const { resData } = props

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info

  return (
    <div className='res-card'>
      <img
        className='res-logo'
        src={CDN_URL + cloudinaryImageId} 
        alt='res-logo'
      />
      <h4>{name}</h4>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} Avg Rating</h4>
      <h4>{costForTwo}</h4>
    </div>
  )
}

export default RestroCard
