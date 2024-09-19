import { FetchedUser } from './types'

export const fetchUsers = async () => {
  const response = await fetch('http://localhost:5050/users')

  if (!response.ok) {
    const message = `fetchUsers error occurred: ${response.statusText}`
    console.error(message)
    return
  }

  const users = await response.json()
  return users as FetchedUser[]
}
