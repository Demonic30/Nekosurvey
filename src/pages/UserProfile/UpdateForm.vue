<template>
  <form>
    <md-card>
      <md-card-header data-background-color="orange">
        <div class="md-layout-item">
          <md-field class="md-warning">
            <label>ชื่อฟอร์ม</label>
            <md-input :value="title[number].name"></md-input>
          </md-field>
          <md-field>
            <label>คำอธิบาย</label>
            <md-input :value="title[number].description"></md-input>
            <span class="md-helper-text"></span>
          </md-field>
        </div>
      </md-card-header>

      <md-card-content>
        
         <md-card class="md-accent" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Accent color</div>
          <div class="md-subhead">With hover and ripple effects</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>

    
        
          <br />
          {{forms[0]}}
          {{number}}
        
        
      </md-card-content>
    </md-card>

  </form>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js"></script>

<script>
import { mapActions, mapState } from "vuex";
import Vue from "vue";

export default {
  // store,
  name: "update-form",
  components: {},
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.$store.dispatch("getForm");
  },
  methods: {
    // ...mapActions({
    //   getForm: "getForm"
    // })
  },
  computed: {
    ...mapState({
      forms: state => state.forms,
      number: state => state.number,    
      title: state => state.title  
    })
  }
};
</script>

<style lang="scss" scoped>
// #btn {
//   margin-right: 15px;
// }
.md-dialog {
  max-width: 2000px;
}
.md-card-img {
  width: 400px;
  display: inline-block;
}
</style>



