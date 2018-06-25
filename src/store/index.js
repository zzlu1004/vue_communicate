import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        objX:{
            c: 0
        }
    },
    mutations:{
        SET_OBJ: (state, data) => {
            state.objX.c = data
        }
    },
    actions:{
        setObj({ commit }, data) {
            commit('SET_OBJ', data)
        }
    },
    getters:{
        objX: state => state.objX,
    }
})

export default store