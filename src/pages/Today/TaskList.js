import { useForm, Controller } from "react-hook-form"
import { useDispatch } from 'react-redux'

import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { updateTaskThunk } from '../../store/taskList/thunk'

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        alignItems="center"
        container
      >
        <Grid xs={1} item>
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

        <Grid item xs={3}>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            color="primary"
            disabled={Boolean(errors.content)}

          >
            Update toDo
          </Button>
        </Grid>
      </Grid >
    </form >
  )
}
