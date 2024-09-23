import { BASE_URL } from './constants'

export const deleteUser = async (id: string) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  })
}
