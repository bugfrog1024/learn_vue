export default {
  state: {
    name: 'A'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        console.log(context);
        //context：上下文，包括commit、getters、rootState等
        context.commit('updateName', 'zhangsan')
      }, 1000)
    }
  },
  getters: {
    fullname(state) {
      return state.name + '111'
    },
    //getters参数：取本级getters，rootState参数：取上级state
    fullname2(state, getters, rootState) {
      return getters.fullname + rootState.counter
    },
  }
}
