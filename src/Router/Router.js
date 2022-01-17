import { lazy } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import lazyWrapper from '../utils/HOK/lazyWrapper'
import Header from '../components/Header'

const Auth = lazyWrapper(lazy(() => import('../pages/Auth/Auth')))
const Today = lazyWrapper(lazy(() => import('../pages/Today/Today')))
const Week = lazyWrapper(lazy(() => import('../pages/Week/Week')))
const Search = lazyWrapper(lazy(() => import('../pages/Search/Search')))
const Analytics = lazyWrapper(lazy(() => import('../pages/Analytics/Analytics')))

export default function Router() {
  const isAuth = useSelector(({ user }) => user.isAuth)

  if (!isAuth) { return <Auth /> }

  return (
    <div>
      <Header />
      <Routes>
          <Route path="/today" element={<Today />} />
          <Route path="/week" element={<Week />} />
          <Route path="/search" element={<Search />} />
          <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </div>
  )
}
