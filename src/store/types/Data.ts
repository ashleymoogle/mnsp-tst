type Profile = {
  name: string
}

export type Transfer = {
  id: number
  country: string
  amount: number
  recipient: number
  status: string
  date: string
}

export type Recipient = {
  id: number
  firstname: string
  lastname: string
}

export interface StateData {
  profile?: Profile
  transfers: Transfer[]
  recipients: Recipient[]
}
