<template>
  <div>
    
       <button @click="getTitle()">get User from API</button> <br>
    {{title[0]}}
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
      getTitle: 'getTitle'
    })
  },
  computed: {
    ...mapState({
      title: state => state.title,
      modules: modules => modules
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