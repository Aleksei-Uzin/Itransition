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

  if (!response.ok) {
    throw new Error(await response.text())
  }

  const result = await response.json()

  return result as { insertedId: string }
}
