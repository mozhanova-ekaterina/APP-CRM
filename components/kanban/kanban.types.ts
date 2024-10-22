import type { EnumStatus } from "~/types/deals.types"

export interface ICard{
  id: string
  name: string
  price: number
  status: string
  $createdAt: string
  companyName: string
}

export interface IColumn{
  id: EnumStatus
  name: string
  items: ICard[]
}