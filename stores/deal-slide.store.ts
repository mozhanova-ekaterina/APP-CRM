import type { ICard } from "~/components/kanban/kanban.types"

const defaultValue: { card: ICard | null, isOpen: boolean } = {
  card: null,
  isOpen: false
}

export const useDealSlideStore = defineStore('deal-slide', {
  state: () => defaultValue,
  getters: {
    isOpen: state => state.isOpen
  },
  actions: {
    clear() {
      this.$reset()
    },
    toggle() {
      this.$state.isOpen = !this.$state.isOpen
    }
  }
})