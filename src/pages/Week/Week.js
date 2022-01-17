import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Grid from '@mui/material/Grid'
import TableWeek from './TableWeek'
import { getWeekTasksListThunk } from '../../store/taskList/thunk'

export default function Week() {
  const dispatch = useDispatch()
  const list = useSelector(({ task }) => task.weekList)

  useEffect(() => {
    dispatch(getWeekTasksListThunk())
  }, [dispatch])

  return (
    <Grid
      sx={{ height: "80vh", textAlign: "center", marginTop: '2rem' }}
      justifyContent="center"
      container
    >
      <Grid item xs={12} md={10}>
        <TableWeek
          week={true}
          list={list}
        />
      </Grid>
    </Grid>
  )
}
