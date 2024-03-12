import theImage from '../../logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../Utils/useOnlineStatus'

const Header = () => {
  const [btnName, setbtnName] = useState('Login')
  const onlineStatus = useOnlineStatus()
  return (
    <div className='flex justify-between bg-yellow-200 shadow-lg'>
      <div className='logo-container'>
        <img className='w-40' src={theImage} alt='' />
      </div>
      <div className='flex items-center'>
        <ul className='flex p=4 m-4'>
          <li className=' px-4 '>
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className=' px-4' >
            <Link to={'/'}>Home</Link>
          </li>
          <li className=' px-4'>
            <Link to={'/about'}>About Us</Link>
          </li>
          <li className=' px-4'>
            <Link to={'/contact'}>Contact Us</Link>
          </li>
          <li className=' px-4'>
            <Link to={'/grocery'}>Grocery</Link>
          </li>
          <li className=' px-4'>Cart</li>
          <button
            className='btn'
            onClick={() => {
              btnName === 'Login' ? setbtnName('Logout') : setbtnName('Login')
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div >
  )
}

export default Header
