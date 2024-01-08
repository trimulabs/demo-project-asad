import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

interface TableDataType {
  name: string
  dateTime: string
  amount: number
  status: string
}

const createData = (
  name: string,
  dateTime: string,
  amount: number,
  status: string
): TableDataType => {
  return { name, dateTime, amount, status }
}

const rows: TableDataType[] = [
  createData('John Doe', '2022-01-01 10:30 AM', 50.0, 'Pending'),
  createData('Alice Smith', '2022-01-02 12:45 PM', 75.5, 'Completed'),
  createData('Bob Johnson', '2022-01-03 03:15 PM', 30.2, 'Failed'),
  createData('Eva Brown', '2022-01-04 09:00 AM', 100.0, 'Pending'),
  createData('Charlie Wilson', '2022-01-05 11:30 AM', 45.8, 'Completed'),
  createData('Grace Taylor', '2022-01-06 02:00 PM', 80.3, 'Pending'),
  createData('Daniel Harris', '2022-01-07 04:45 PM', 25.0, 'Completed'),
  createData('Olivia Davis', '2022-01-08 08:15 AM', 60.7, 'Failed'),
  createData('Michael Miller', '2022-01-09 01:30 PM', 90.5, 'Pending'),
  createData('Sophia Jackson', '2022-01-10 05:00 PM', 40.2, 'Failed'),
]

export default function TransactionTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer name</TableCell>
            <TableCell>Date & Time</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>

              <TableCell>{row.dateTime}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
