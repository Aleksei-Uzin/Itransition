import { BASE_URL } from './constants'

export const updateUserTime = async (email: string, lastSignInTime: string) => {
  const response = await fetch(BASE_URL, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, lastSignInTime }),
  })

  return response
}
