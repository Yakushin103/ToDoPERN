import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

import Grid from '@mui/material/Grid'
import { getAnalyticsDataThunk } from '../../store/taskList/thunk'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function Analytics() {
  const dispatch = useDispatch()
  const analyticsArr = useSelector(({ task }) => task.analyticsArr)

  useEffect(() => {
    dispatch(getAnalyticsDataThunk())
  }, [dispatch])

  const data = {
    labels: ['Done', 'Not done'],
    datasets: [
      {
        label: '# of Votes',
        data: analyticsArr,
        backgroundColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <Grid
      sx={{ height: "80vh", textAlign: "center", marginTop: '2rem' }}
      justifyContent="center"
      container
    >
      <Grid item xs={12} md={6}>
        <Pie
          data={data}
          height="100px"
          width="100px"
          options={{ maintainAspectRatio: false }}
        />
      </Grid>
    </Grid>
  )
}
