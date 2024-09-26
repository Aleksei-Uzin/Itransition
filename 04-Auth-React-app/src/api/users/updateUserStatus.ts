import { BASE_URL } from './constants'

export const updateUserStatus = async (
  id: string,
  email: string,
  status: boolean
) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status, email }),
  })

  return response
}
