import { lazy } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import lazyWrapper from '../utils/HOK/lazyWrapper'
import Header from '../components/Header'

const Today = lazyWrapper(lazy(() => import('../pages/Today/Today')))
// const Product = lazyWrapper(lazy(() => import('../pages/Product/Product')))
// const Create = lazyWrapper(lazy(() => import('../pages/Create/Create')))
// const Edit = lazyWrapper(lazy(() => import('../pages/Edit/Edit')))
const Auth = lazyWrapper(lazy(() => import('../pages/Auth/Auth')))

export default function Router() {
  const isAuth = useSelector(({ user }) => user.isAuth)

  if (!isAuth) { return <Auth /> }

  return (
    <div>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Header />}> */}
          <Route path="/today" element={<Today />} />
          {/* <Route path="invoices" element={<Invoices />} />
          <Route path="activity" element={<Activity />} /> */}
        {/* </Route> */}
      </Routes>

      {/* <Routes>
        <Route
          path="/today"
          element={Today}
          exact
        />
      </Routes> */}
    </div>
  )
}
