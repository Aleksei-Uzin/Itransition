import { GridColDef } from '@mui/x-data-grid'
import { ProcessedUser } from '../../api'

export const COLUMNS: GridColDef<ProcessedUser[][number]>[] = [
  { field: 'id', headerName: 'ID', width: 120, sortable: false },
  {
    field: 'name',
    headerName: 'Name',
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 180,
  },
  {
    field: 'creationTime',
    headerName: 'Registration time',
    width: 170,
  },
  {
    field: 'lastSignInTime',
    headerName: 'Last login time',
    width: 170,
  },
  {
    field: 'status',
    headerName: 'Status',
  },
]
