import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
import UserProvider from '@/resources/user_provider'
const userService = new UserProvider()
Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    num: 0,
    number: 0,
    forms: {},
    title: {},
    user: {},
    question: [],
    no_question: 1,
    titleInsert: null,
    description: null,
    icon: null

  },
  actions: {
    async getUser({ commit }) {
      const data = await userService.getUser()
      commit('SET_USER', data.data)
    },
    async getTitle({ commit }) {
      const data = await userService.getTitle()
      commit('SET_TITLE', data.data)

      Object.size = function (obj) {
        var size = 0, key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) size++;
        }
        return size + 1;
      }
      this.state.num = Object.size(this.state.title)
      console.log(this.state.num + "55555555555");

    },
    async getQuestion({ commit }) {
      const data = await userService.getQuestion()
      commit('SET_QUESTION', data.data)
    },

    async getForm({ commit }) {
      const data = await userService.getForm(this.state.number)
      commit('SET_FORM', data.data)
    },

    createForm: function () {

      // for (var i = 0; i < this.state.question.length; i++) {
      // console.log(this.state.question[i].image1,this.state.question[i].image2||null);


      axios.post("https://apinekosurvey.herokuapp.com/api/questions", {
        image1: "GGG",
        image2: this.state.question[0].image2 || null,
        image3: this.state.question[0].image3 || null,
        image4: this.state.question[0].image4 || null,
        number: '' + 6,
        question: this.state.question[0].question || null,
        question_type: this.state.question[0].question_type || null,
        answer1: this.state.question[0].answer1 || null,
        answer2: this.state.question[0].answer2 || null,
        answer3: this.state.question[0].answer3 || null,
        answer4: this.state.question[0].answer4 || null,
        no_question: '' + 1,
        status: '' + 0,
        image5: this.state.question[0].image5 || null,
        image6: this.state.question[0].image6 || null,
        image7: this.state.question[0].image7 || null,
        image8: this.state.question[0].image8 || null,
        image9: this.state.question[0].image9 || null,
        image10: this.state.question[0].image10 || null,
        answer5: this.state.question[0].answer5 || null,
        answer6: this.state.question[0].answer6 || null,
        answer7: this.state.question[0].answer7 || null,
        answer8: this.state.question[0].answer8 || null,
        answer9: this.state.question[0].answer9 || null,
        answer10: this.state.question[0].answer10 || null,

      }, {
        headers: {
          "Content-type": "application/json"
        }
      }).then(res => {
        console.log("res.data");

      }).catch(error => {
        console.log("ERROR");

      });
      // }
    }
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data
    },
    SET_QUESTION(state, data) {
      state.question.push(data)
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
    SET_NUMBER(state, data) {
      state.num = data
    },
    SET_TITLEINSERT(state, data) {
      state.num = data
    },
    SET_DESCRIPTION(state, data) {
      state.num = data
    },
    SET_ICON(state, data) {
      state.num = data
    },

  },
  getters: {
    number: state => state.number,
    forms: state => state.forms,
    title: state => state.title,
    user: state => state.user,
    question: state => state.question,
    no_question: state => state.no_question,
    num: state => state.num
  }
})

