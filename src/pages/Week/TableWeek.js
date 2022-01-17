import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Alert from '@mui/material/Alert'

import './TableWeek.scss'

export default function TableWeek({ list, week }) {
  return (
    <TableContainer className="table" component={Paper}>
      {
        list.length ?
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Content</TableCell>
                <TableCell align="right">Done or not</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                list.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.content}
                    </TableCell>
                    <TableCell align="right">{item.isCheck ? 'Done' : 'Not'}</TableCell>
                    <TableCell align="right">{item.created_At}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table> :
          <Alert severity="info"> You nothing doing on this {week ? 'week' : 'day'} </Alert>
      }
    </TableContainer>
  )
}
