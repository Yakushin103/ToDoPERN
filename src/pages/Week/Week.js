import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Grid from '@mui/material/Grid'
import { getWeekTasksListThunk } from '../../store/taskList/thunk'

export default function Week() {
  const dispatch = useDispatch()
  const list = useSelector(({task}) => task.weekList)

  useEffect(() => {
    dispatch(getWeekTasksListThunk())
  }, [dispatch])

  return (
    <Grid
      sx={{ height: "80vh", textAlign: "center" }}
      alignItems="center"
      justifyContent="center"
      container
    >
      <Grid item xs={4}>
        <List>
          <ListItem
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography>
              ToDo on today
            </Typography>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  )
}
