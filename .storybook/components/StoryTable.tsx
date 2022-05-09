import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { FunctionComponent, ReactElement } from "react"

export interface IStoryTableRow {
  name: string
  type: string
  defaultValue: string
  description: string
}

export function createData(name: string, type: string, defaultValue: string, description: string): IStoryTableRow {
  return { name, type, defaultValue, description }
}

interface IStoryTable {
  rows: IStoryTableRow[]
}

export const StoryTable: FunctionComponent<IStoryTable> = ({ rows }): ReactElement => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Default Value</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: IStoryTableRow) => (
            <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.defaultValue}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
