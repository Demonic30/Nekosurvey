import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
import UserProvider from '@/resources/user_provider'
const userService = new UserProvider()

Vue.use(Vuex)

const modules = {
}

const state = {
  
  number:0,
  forms:{},
  title:{},
  user: {},
  question: {}
}

const actions = {
  async getUser ({commit}) {
    const data = await userService.getUser()
    commit('SET_USER', data.data)
  },
  async getTitle ({commit}) {
    const data = await userService.getTitle()
    commit('SET_TITLE', data.data)
  },
  async getQuestion ({commit}) {
    const data = await userService.getQuestion()
    commit('SET_QUESTION', data.data)
  },
  
  async getForm ({commit}) {
    const data = await userService.getForm(state.number)
    commit('SET_FORM', data.data)
  },
  
  createForm: function () {
    axios
      .post('https://apinekosurvey.herokuapp.com/api/question', {
        image1: ''+this.data.image1,
        image2: ''+this.data.image2,
        image3: ''+this.data.image3,
        image4: ''+this.data.image4,
        number: ''+this.data.number,
        question: ''+this.data.question,
        question_type: ''+this.data.question_type,
        answer1: ''+this.data.answer1,
        answer2: ''+this.data.answer2,
        answer3: ''+this.data.answer3,
        answer4: ''+this.data.answer4,
        no_question: ''+this.data.no_question,
        status: 0,
      })
  }
}

const mutations = {
  SET_USER (state, data) {
    state.user = data
  },
  SET_QUESTION(state, data){
    state.question = state.question.push(data)
  },
  SET_TITLE(state, data) {
    state.title = data
  }, 
  SET_NUM(state, data) {
    state.number = data
  }, 
  SET_FORM(state, data) {
    state.forms = data
  }, 
  
}

export default new Vuex.Store({
  modules,
  state,
  actions,
  mutations,
  
})