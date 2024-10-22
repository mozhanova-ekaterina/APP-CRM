export interface IBaseField {
  $createdAt: string
  $id: string
}

export interface ICustomer extends IBaseField {
  name: string
  email: string
  avatar_url: string
  from_source?: string
}

export interface IComment extends IBaseField {
  text: string
}

export enum EnumStatus {
  'todo' = 'To Do',
  'to-be-agreed' = 'to-be-agreed',
  'in-progress' = 'in-progress',
  'produced' = 'produced',
  'done' = 'Done',
}

export interface IDeal extends IBaseField {
  name: string
  price: number
  customer: ICustomer
  comments: IComment[]
  status: EnumStatus
}