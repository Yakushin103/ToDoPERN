import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm, Controller } from "react-hook-form"
import moment from 'moment'

import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TaskList from './TaskList'
import { addNewTask, getTodayTasksList } from '../../store/taskList/thunk'

export default function Today() {
  const { id } = useSelector(({ user }) => user.user)
  const taskList = useSelector(({ task }) => task.todayTaskList)
  const dispatch = useDispatch()
  const { control, reset, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      content: '',
      isCheck: false,
      created_At: moment(new Date()).format('MM/DD/YYYY'),
    }
  })


  function onSubmit(data) {
    dispatch(addNewTask({
      ...data,
      owner: id
    }))
    reset({
      content: '',
      isCheck: false,
      created_At: moment(new Date()).format('MM/DD/YYYY'),
    })
  }

  useEffect(() => {
    dispatch(getTodayTasksList(moment(new Date()).format('MM/DD/YYYY')))
  }, [dispatch])

  return (
    <Grid
      sx={{ height: "80vh", textAlign: "center" }}
      alignItems="center"
      justifyContent="center"
      container
    >
      <Grid item>
        <List>
          <ListItem>
            <Typography>
              ToDo on today
            </Typography>
          </ListItem>

          {
            taskList.map(task => (
              <ListItem
                key={task.id}
              >
                <TaskList
                  list={task}
                />
              </ListItem>
            ))
          }

          <form onSubmit={handleSubmit(onSubmit)}>
            <ListItem>
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
            </ListItem>

            <ListItem>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
                disabled={Boolean(errors.content)}

              >
                Add toDo
              </Button>
            </ListItem>
          </form>
        </List>
      </Grid>
    </Grid>
  )
}
