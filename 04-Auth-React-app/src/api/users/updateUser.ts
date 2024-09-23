import { BASE_URL } from './constants'
import { ProcessedUser } from './types'

export const updateUser = async (userData: ProcessedUser) => {
  const response = await fetch(`${BASE_URL}/${userData.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })

  // const result = await response.json()

  return response
}
