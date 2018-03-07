import Vue from 'vue'
import Vuex from 'vuex'

import menu from './modules/menu'
import orders from './modules/orders'
import users from './modules/users'

//import * as actions from './actions.js'
//import * as mutations from './mutations.js'
//import * as getters from './getters.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        menu,
        orders,
        users
    }
})