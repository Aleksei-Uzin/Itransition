import { BASE_URL } from './constants'

export const deleteUser = async (id: string, email: string) => {
  await fetch(`${BASE_URL}/${id}/${email}`, {
    method: 'DELETE',
  })
}
