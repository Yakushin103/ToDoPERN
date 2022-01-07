import React from 'react'
import { useForm, Controller } from "react-hook-form"

import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function Registration({ setLogin }) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    }
  })

  const onSubmit = data => console.log(data)

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
          <Controller
            name="confirmPassword"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                variant="outlined"
                fullWidth
                id="confirmPassword"
                label="Confirm Password"
                inputProps={{ type: 'password' }}
                error={Boolean(errors.confirmPassword)}
                helperText={
                  errors.confirmPassword &&
                  'Confirm Password is required'
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
            Registration
          </Button>
        </ListItem>

        <ListItem>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={() => setLogin('login')}
          >
            To Login
          </Button>
        </ListItem>

      </List>
    </form>
  )
}
