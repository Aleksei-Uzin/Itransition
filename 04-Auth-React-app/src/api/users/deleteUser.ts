import { BASE_URL } from './constants'

export const deleteUser = async (id: string, uid: string) => {
  await fetch(`${BASE_URL}/${id}/${uid}`, {
    method: 'DELETE',
  })
}
