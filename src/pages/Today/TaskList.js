import { useForm, Controller } from "react-hook-form"
import { useDispatch } from 'react-redux'

import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import RefreshIcon from '@mui/icons-material/Refresh'
import { updateTaskThunk, removeTaskThunk } from '../../store/taskList/thunk'

export default function TaskList({ list }) {
  const dispatch = useDispatch()
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      content: list.content,
      isCheck: Boolean(list.isCheck),
    }
  })

  function onSubmit(data) {
    dispatch(updateTaskThunk({ ...list, ...data }))
  }

  function handleDelete(id) {
    dispatch(removeTaskThunk(id))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        alignItems="center"
        container
        spacing={1}
      >
        <Grid xs={2} item>
          <Controller
            name="isCheck"
            control={control}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Checkbox
                onBlur={onBlur}
                onChange={onChange}
                checked={Boolean(value)}
                inputRef={ref}
              />
            )}
          ></Controller>

        </Grid>

        <Grid xs={8} item>
          <Controller
            name="content"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                variant="outlined"
                fullWidth
                label="To Do today"
                type="text"
                error={Boolean(errors.content)}
                helperText={
                  errors.content &&
                  'Field is required'
                }
                {...field}
              ></TextField>
            )}
          ></Controller>

        </Grid>

        <Grid item xs={1}>
          <IconButton type="submit">
            <RefreshIcon />
          </IconButton>
        </Grid>

        <Grid item xs={1}>
          <IconButton onClick={() => handleDelete(list.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid >
    </form >
  )
}
