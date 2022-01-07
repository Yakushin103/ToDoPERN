import { lazy } from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import lazyWrapper from '../utils/HOK/lazyWrapper'
// import Header from '../components/Header'

// const Products = lazyWrapper(lazy(() => import('../pages/Products/Products')))
// const Product = lazyWrapper(lazy(() => import('../pages/Product/Product')))
// const Create = lazyWrapper(lazy(() => import('../pages/Create/Create')))
// const Edit = lazyWrapper(lazy(() => import('../pages/Edit/Edit')))
const Auth = lazyWrapper(lazy(() => import('../pages/Auth/Auth')))

export default function Router() {
  const isAuth = useSelector(({ user }) => user.isAuth)

  console.log('isAuth', isAuth)

  if (!isAuth) { return <Auth /> }
  
  return (
    <div>
      You come
      {/* <Header /> */}
      
      {/* <Switch>
        <Route
          path="/products"
          component={Products}
          exact
        />
      </Switch> */}
    </div>
  )
}
