import React from 'react'
import Favourites from '../Favourites/Favourites'
import MainPage from '../MainPage/MainPage'

const routesElements = [
  { exact: false, path: '/favourites', element: <Favourites /> },
  { exact: true, path: '/', element: <MainPage /> },
]
export default routesElements
