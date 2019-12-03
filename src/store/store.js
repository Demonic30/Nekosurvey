import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store=new Vuex.Store({

    state:{
        question:{}

    },
    mutations:{
        setQuestion(state,question){
            state.question = question
        }
    },
    getters:{
        question:state=>state.question
    }
})

