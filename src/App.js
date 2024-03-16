import React, { lazy, Suspense, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import UserContext from './Utils/UserContext'
import appStore from './Utils/appStore'
import { Provider } from 'react-redux'
import Cart from './components/Cart'
// import Grocery from './components/Grocery'

const Grocery = lazy(() => import('./components/Grocery'))

const AppLayout = () => {
  //a big app layout for all app
  //authentication
  const [userName, setUserName] = useState()

  useEffect(() => {
    //mka ea api call

    const data = {
      name: 'Mayank Verma',
    }
    setUserName(data.name)
  }, [])

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className='app'>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Grocery',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: '/Cart',
        element: <Cart/>
      }
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)
