export interface UserData {
  creationTime: string
  email: string
  lastSignInTime: string
  name: string
  status: boolean
}

export interface FetchedUser extends UserData {
  _id: string
}

export interface ProcessedUser extends UserData {
  id: string
}

export enum STATUS {
  IDLE = 'idle',
  PENDING = 'pending',
  RESOLVED = 'resolved',
  REJECTED = 'rejected',
}
