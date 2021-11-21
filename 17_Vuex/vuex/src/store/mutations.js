import {INCREMENT} from "./mutations-types";

export default {
  //方法
  [INCREMENT](state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  incrementCount(state, count) {
    state.counter += count
  },
  addStu(state, stu) {
    state.students.push(stu)
  },
  incrementCountSpec(state, payload) {
    state.counter += payload.count
  },
  updateInfo(state) {
    // state.info['age'] = 23
    // state.info['address'] = 'Nanjing'
    // Vue.set(state.info, 'address', 'Nanjing')
    // delete state.info.height
    // Vue.delete(state.info, 'height')
    state.info.name = 'coderwhy'
  }
}
