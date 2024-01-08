import * as React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  Box,
} from '@mui/material'

import { TransactionTableRows } from '@/data/constants'
import COLORS from '@/styles/colors'
import theme from '@/styles/ThemeRegistry/theme'
import Image from 'next/image'
import arrowRight from '@/../public/Assets/Icons/arrowRight.svg'

export default function TransactionTable() {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography
                sx={{ color: `${COLORS.contentSecondary}` }}
                variant="labelS"
              >
                Customer name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={{ color: `${COLORS.contentSecondary}` }}
                variant="labelS"
              >
                Date & Time
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={{ color: `${COLORS.contentSecondary}` }}
                variant="labelS"
              >
                Amount
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={{ color: `${COLORS.contentSecondary}` }}
                variant="labelS"
              >
                Status
              </Typography>
            </TableCell>

            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TransactionTableRows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography
                  sx={{ color: `${COLORS.contentPrimary}` }}
                  variant="labelS"
                >
                  {row.name}
                </Typography>
              </TableCell>

              <TableCell>
                <Typography
                  sx={{ color: `${COLORS.contentPrimary}` }}
                  variant="labelS"
                >
                  {row.dateTime}
                </Typography>
              </TableCell>

              <TableCell>
                <Typography
                  sx={{ color: `${COLORS.contentPrimary}` }}
                  variant="labelS"
                >
                  ${row.amount}
                </Typography>
              </TableCell>

              <TableCell>
                <Typography sx={{ color: `${COLORS.contentPrimary}` }}>
                  {row.status === 'Approved' && (
                    <Chip
                      color="success"
                      label={`${row.status}`}
                      sx={{
                        fontSize: '14px',
                        fontWeight: 600,
                        lineHeight: '142.857%',
                      }}
                    />
                  )}

                  {row.status === 'Pending' && (
                    <Chip
                      color="warning"
                      label={`${row.status}`}
                      sx={{
                        fontSize: '14px',
                        fontWeight: 600,
                        lineHeight: '142.857%',
                      }}
                    />
                  )}

                  {row.status === 'Declined' && (
                    <Chip
                      color="error"
                      label={`${row.status}`}
                      sx={{
                        fontSize: '14px',
                        fontWeight: 600,
                        lineHeight: '142.857%',
                      }}
                    />
                  )}
                </Typography>
              </TableCell>

              <TableCell>
                <Box
                  onClick={() => {
                    // add some click functionality here...
                  }}
                  sx={{
                    padding: '14px 20px 14px 20px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: theme.spacing(4),
                    height: theme.spacing(4),
                    borderRadius: theme.spacing(1),
                    background: COLORS.selected,
                    cursor: 'pointer',
                  }}
                >
                  <Image src={arrowRight} alt="icon"></Image>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
