import { UserData } from './types'

export const addUser = async (userData: UserData) => {
  const response = await fetch('http://localhost:5050/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })

  return response
}
