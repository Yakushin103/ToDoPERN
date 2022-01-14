import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import { auth, login } from '../store/user/reducer'

import './Header.scss'

export default function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onHandleLogOut = () => {
    dispatch(auth(false))
    dispatch(login({}))
    navigate('/')
  }

  return (
    <div className="header">
      <NavLink exact to="/today">
        <Button>Today</Button>
      </NavLink>

      <NavLink exact to="/week">
        <Button>Up this week</Button>
      </NavLink>

      <NavLink exact to="/search">
        <Button>Search</Button>
      </NavLink>

      <NavLink exact to="/analytics">
        <Button>Analytics</Button>
      </NavLink>

      <NavLink exact to="/">
        <Button onClick={onHandleLogOut}>Log Out</Button>
      </NavLink>
    </div>
  )
}
