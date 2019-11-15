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
  user: {},
  question: [
    {
      image1: '',
      image2: '',
      image3: '',
      image4: '',
      number: 4,
      question: '',
      question_type: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
      no_question: '',
      status: 0,
    }
  ]
 
}

const actions = {
  async getUser ({commit}) {
    const data = await userService.getUser()
    commit('SET_USER', data)
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
  }
}

export default new Vuex.Store({
  modules,
  state,
  actions,
  mutations
})