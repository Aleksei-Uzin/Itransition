export interface UserData {
  name: string
  email: string
  creationTime: string
  lastSignInTime: string
  status: boolean
}

export interface FetchedUser extends UserData {
  _id: string
}

export enum STATUS {
  IDLE = 'idle',
  PENDING = 'pending',
  RESOLVED = 'resolved',
  REJECTED = 'rejected',
}
