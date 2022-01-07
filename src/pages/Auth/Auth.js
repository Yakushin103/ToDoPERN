import { useState } from 'react'

import Grid from '@mui/material/Grid'
import Login from './Login'
import Registration from './Registration'

import './Auth.css'

export default function Auth() {
  const [login, setLogin] = useState('login')

  return (
    <Grid
      sx={{ width: '100%', height: '100vh', textAlign: 'center' }}
      justifyContent="center"
      alignItems="center"
      container
    >
      <Grid item>
        {
          login === 'login' ?
            <Login
              setLogin={setLogin}
            /> :
            <Registration
              setLogin={setLogin}
            />
        }
      </Grid>
    </Grid>
  )
}
