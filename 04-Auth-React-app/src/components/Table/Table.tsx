import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { COLUMNS } from './constants'
import { auth, fetchUsers, ProcessedUser, STATUS } from '../../api'
import { ActionsPanel } from '../ActionsPanel'
import { State } from './types'

export const Table = () => {
  const [state, setState] = useState<State>({
    status: STATUS.IDLE,
  })
  const [selectedRows, setSelectedRows] = useState<ProcessedUser[]>([])
  const { status, rows = [] } = state
  const userEmail = auth.currentUser?.email
  const isCurrUserSelected = selectedRows.some(
    ({ email }) => email === userEmail
  )
  const isLoading = status === STATUS.IDLE || status === STATUS.PENDING

  const handleUpdateStatus = () => setState({ status: STATUS.PENDING })

  useEffect(() => {
    if (isLoading) {
      setState({ status: STATUS.PENDING })
      fetchUsers().then(users => {
        if (!users) {
          setState({ status: STATUS.RESOLVED })
          return
        }

        setState({ status: STATUS.RESOLVED, rows: users })
      })
    }
  }, [isLoading])

  return (
    <>
      <ActionsPanel
        isSelected={isCurrUserSelected}
        selectedUsers={selectedRows}
        setStatus={handleUpdateStatus}
      />
      <Box sx={{ height: 400, maxWidth: '880px', margin: 'auto' }}>
        <DataGrid
          rows={rows}
          columns={COLUMNS}
          loading={isLoading}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          onRowSelectionModelChange={ids => {
            const selectedIDs = new Set(ids)
            const selectedRowData = rows.filter(row => selectedIDs.has(row.id))
            setSelectedRows(selectedRowData)
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  )
}
