import { NuxtLink } from "#build/components"
import type { ICard } from "~/components/kanban/kanban.types"

const defaultValue: { card: ICard | null, isOpen: boolean } = {
  card: null,
  isOpen: false
}

export const useDealSlideStore = defineStore('deal-slide', {
  state: () => defaultValue,
  actions: {
    clear() {
      this.$patch({card: null, isOpen: false})//$reset не работает???:
    },
    toggle() {
      this.$state.isOpen = !this.$state.isOpen
    },
    set(card: ICard) {
      this.$patch({ card, isOpen: true })
    }
  }
})