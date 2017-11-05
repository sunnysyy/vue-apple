import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		totalPrice: 0
	},
	getters: {
		getTotal(state) {
			return state.totalPrice
		}
	},
	mutations: {
		increment(state, price) {
			state.totalPrice += price
		},
		decrement(state, price) {
			state.totalPrice -= price
		}
	},
	actions: {
		increase(context, price) {
			//异步
			context.commit('increment', price)
		}
	}

})