<template>
  <div>
    
       <button @click="getForm()">get User from API</button> <br>
    {{form}}
    <h1>5555</h1>
    <!-- {{modules}} -->
      </div>
    
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'App1',
  components: {
  },
  methods: {
    ...mapActions({
      getForm: 'getForm'
    })
  },
  computed: {
    ...mapState({
      title: state => state.title,
      modules: modules => modules,
      form: state=> state.form
    })
  }
}

</script>

<style>
	/* #app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	} */
</style>