interface IAuthStore {
  name: string
  email: string
  status: boolean
}

const defaultValue: { user: IAuthStore } = {
  user: {
    name: '',
    email: '',
    status: false
  }
}

export const useAuthStore = defineStore('auth', {
  state: () => defaultValue,
  getters: {
    isAuth: state => state.user.status
  },
  actions: {
    clear() {
      this.$patch(defaultValue)
    },
    set(input: IAuthStore) {
      this.$patch({
        user: input
      })
    }
  }
})

//You can think of state as the data of the store, getters as the computed properties of the store, and actions as the methods.

// https://pinia.vuejs.org/core-concepts/

