import { useQuery } from "@tanstack/vue-query";
import { COLLECTION_DEALS, DB_ID } from "~/app.constants";
import { KANBAN_DATA } from "./kanban.data";
import type { ICard, IColumn } from "./kanban.types";
import type { IDeal } from "~/types/deals.types";

export function useKanbanQuery() {
  return useQuery({
    queryKey: ['deals'],//ключ для запроса
    queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),//передали id базы данных, id коллекции
    select(data) {//тут я что-то делаю с data
      const newBoard = KANBAN_DATA.map(column => (
        {
          ...column,
          items: [] as ICard[]
        }))//сделали копию массива
      const deals = data.documents as unknown as IDeal[] //привели к типу IDeal[]

      for (const deal of deals) {
        const column = newBoard.find(column => column.id === deal.status) as IColumn//нашли нужную колонку

        if (column) {
          column.items.push({
            id: deal.$id,
            name: deal.name,
            price: deal.price,
            status: deal.status,
            companyName: deal.customer?.name,
            $createdAt: deal.$createdAt
          })
        }
      }
      return newBoard
    }
  }
  )
}

