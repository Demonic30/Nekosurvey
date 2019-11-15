<template>
  <form>
    <md-card>
      <md-card-header data-background-color="orange">
        <div class="md-layout-item">
          <md-field class="md-primary">
            <label>ชื่อฟอร์ม</label>
            <md-input ></md-input>
          </md-field>
          <md-field>
            <label>คำอธิบายแบบฟอร์ม</label>
            <md-input ></md-input>
            <span class="md-helper-text"></span>
          </md-field>
        </div>
      </md-card-header>

      <md-card-content>
        <div ref="container">
           <md-button class="md-primary md-raised" @click="getUser()">get question from API</md-button> <br>
    {{user}}
        </div>

        <div class="md-layout">
          <div class="md-layout-item md-size-100 text-right">
            <center>
              <md-button class="md-primary md-raised" @click="active = true">Confirm</md-button>
            </center>
            <!-- <button @click="getUser()">get User from API</button>
            <br />
            {{user}}-->
          </div>
        </div>
      </md-card-content>
    </md-card>

    <div>
      <md-dialog-confirm
        :md-active.sync="active"
        md-title="Please confirm creating a survey?"
        md-content="Your form is success has been created."
        md-confirm-text="Agree"
        md-cancel-text="Disagree"
        @md-cancel="onCancel"
        @md-confirm="onConfirm"
      />
      <span v-if="value">Value: {{ value }}</span>
    </div>

    <div>
      <md-dialog :md-active.sync="showDialog">
        <md-dialog-title align="center">Description</md-dialog-title>
        <br />
        <md-tabs class="md-accent" md-alignment="centered">
          <!-- <md-tab id="tab-home" md-label="ข้อความสั้นๆ" md-icon="short_text">
            <center>
              <div class="md-card-img">
                <img src="@/assets/img/11.png" alt="Cover" />
              </div>
            </center>
          </md-tab>-->

          <md-tab id="tab-pages" md-label="ตัวเลือกประกอบรูปภาพ" md-icon="insert_photo">
            <center>
              <div class="md-card-img">
                <img src="@/assets/img/2.png" alt="Cover" />
              </div>
            </center>
          </md-tab>

          <md-tab id="tab-posts" md-label="ตัวเลือกข้อความ" md-icon="radio_button_checked">
            <center>
              <div class="md-card-img">
                <img src="@/assets/img/3.png" alt="Cover" />
              </div>
            </center>
          </md-tab>
        </md-tabs>

        <md-dialog-actions>
          <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        </md-dialog-actions>
      </md-dialog>
    </div>
  </form>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js"></script>

<script>
import {mapActions, mapState} from 'vuex'
import Vue from "vue";




export default {
  // store,
  name: "update-form",
  components: {
  },
 
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data: () => ({
 
    active: false,
    value: null,
    showDialog: false,
    
  }),
   methods: {
    ...mapActions({
      getUser: 'getUser'
    })
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
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



