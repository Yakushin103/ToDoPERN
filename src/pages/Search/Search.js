import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Calendar from 'react-calendar'
import moment from 'moment'

import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import TableWeek from '../Week/TableWeek'
import { getSearchTasksListThunk } from '../../store/taskList/thunk'

import './Search.scss'

export default function Search() {
  const [value, onChange] = useState(new Date())
  const list = useSelector(({ task }) => task.searchList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSearchTasksListThunk(moment(value).format('MM/DD/YYYY')))
  }, [value, dispatch])

  console.log('list', list)

  return (
    <Grid
      sx={{ height: "80vh", textAlign: "center", marginTop: '2rem' }}
      justifyContent="center"
      container
    >
      <Grid item xs={12} md={10}>
        <List>
          <ListItem
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Calendar
              onChange={onChange}
              value={value}
            />
          </ListItem>

          <ListItem>
            <TableWeek
              list={list}
              week={false}
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  )
}
