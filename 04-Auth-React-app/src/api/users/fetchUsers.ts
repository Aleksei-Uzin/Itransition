import { BASE_URL } from './constants'
import { FetchedUser, ProcessedUser } from './types'

export const fetchUsers = async () => {
  const response = await fetch(BASE_URL)

  if (!response.ok) {
    const message = `fetchUsers error occurred: ${response.statusText}`
    console.error(message)
    return
  }

  const fetchedUsers: FetchedUser[] = await response.json()
  const processedUsers: ProcessedUser[] = fetchedUsers.map(
    ({ _id, ...rest }) => ({
      id: _id,
      ...rest,
    })
  )

  return processedUsers
}
