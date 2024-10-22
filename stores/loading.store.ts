export const useLoadingStore = defineStore('loading', {
  state: () => ({
    loading: true
  }),
  getters: {
    isLoading: state => state.loading
  },
  actions: {
    setLoading(data: boolean) {
      // this.loading = loading
      this.$patch({ loading: data })//???: this.$patch
    }
  }
})