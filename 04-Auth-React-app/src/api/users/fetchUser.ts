import { BASE_URL } from './constants'

export const fetchUser = async (id: string) => {
  const response = await fetch(`${BASE_URL}/${id}`)

  if (!response.ok) {
    const message = `An error has occurred: ${response.statusText}`
    console.error(message)
    return
  }

  const user = await response.json()

  if (!user) {
    console.warn(`Record with id ${id} not found`)
    return
  }

  return user
}
