import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from "react-hook-form"
import { useNavigate } from 'react-router-dom'

import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { loginUser } from '../../store/user/thunks'

export default function Login({ setLogin }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = async data => {
    await dispatch(loginUser(data))
    navigate('/today')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography component="h6" variant="h6">
        Login
      </Typography>

      <List>
        <ListItem>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email"
                inputProps={{ type: 'email' }}
                error={Boolean(errors.email)}
                helperText={
                  errors.email &&
                  'Email is required'
                }
                {...field}
              ></TextField>
            )}
          ></Controller>
        </ListItem>

        <ListItem>
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                variant="outlined"
                fullWidth
                id="password"
                label="Password"
                inputProps={{ type: 'password' }}
                error={Boolean(errors.password)}
                helperText={
                  errors.password &&
                  'Password is required'
                }
                {...field}
              ></TextField>
            )}
          ></Controller>
        </ListItem>

        <ListItem>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            color="primary"
            // disabled={!!Object.keys(errors).length}
            disabled={Boolean(errors.password || errors.email)}

          >
            Login
          </Button>
        </ListItem>

        <ListItem>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={() => setLogin('register')}
          >
            Registration
          </Button>
        </ListItem>

      </List>
    </form>
  )
}
