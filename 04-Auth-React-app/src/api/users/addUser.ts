import { BASE_URL } from './constants'
import { UserData } from './types'

export const addUser = async (userData: UserData) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })

  const result = await response.json()

  return result as { insertedId: string }
}
