<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <center>
          <div class="md-layout-item md-medium-size-70 md-xsmall-size-70 md-size-70">
            <form>
              <md-card>
                <md-card-header :data-background-color="dataBackgroundColor">
                  <div class="md-layout-item">
                    <md-field class="md-primary">
                      <label>ชื่อฟอร์ม</label>
                      <md-input v-model="formName" @input="addtitle()"></md-input>
                    </md-field>
                    <md-field>
                      <label>คำอธิบายแบบฟอร์ม</label>
                      <md-input v-model="formDes" @input="addtitleDes()"></md-input>
                      <span class="md-helper-text"></span>
                      
                    </md-field>
                    <md-field>
                    <label>เพิ่มรูปภาพ</label>
                      <md-file v-model="icon" @input="addIcon()" />
                      </md-field>
                  </div>
                </md-card-header>

                <md-card-content>
                  <div ref="container">
                    <div ref="change">
                      <md-card>
                        <md-card-content>
                          <label>- คำถามรูปแบบตัวเลือกข้อความ</label>
                          <div class="md-layout">
                            <div class="md-layout-item md-small-size-90 md-size-90">
                              <md-field slot="content">
                                <label>คำถาม</label>
                                <md-input
                                  type="text"
                                  v-model="QestionName"
                                  @input="addQuestion(QestionName)"
                                ></md-input>
                              </md-field>
                              <div class="md-layout">
                                <div class="md-layout-item md-small-size-40 md-size-40"></div>
                                <div class="md-layout-item md-small-size-45 md-size-45"></div>
                                <div class="md-layout-item md-small-size-15 md-size-15">
                                  <div
                                    v-if="iii == 0 || iii == 1 || iii == 2 || iii == 3 || iii == 4 || iii == 5 || iii == 6 || iii == 7 || iii == 8 || iii == 9"
                                  >
                                    <md-button
                                      id="btn"
                                      class="md-success md-icon-button md-dense"
                                      @click="addRow"
                                    >
                                      <md-icon>add_box</md-icon>
                                      <md-tooltip md-direction="bottom">เพิ่มคำตอบ</md-tooltip>
                                    </md-button>
                                    <!-- <md-button id="btn" class="md-danger md-icon-button md-dense">
                    <md-icon>delete</md-icon>
                    <md-tooltip md-direction="bottom">ลบคำตอบ</md-tooltip>
                                    </md-button>-->
                                  </div>
                                </div>
                              </div>

                              <ul>
                                <li v-for="(input, index) in inputs" :key="input.id">
                                  <div class="md-layout">
                                    <div class="md-layout-item md-small-size-40 md-size-40">
                                      <md-field slot="content">
                                        <label>เพิ่มรูปภาพ</label>
                                        <md-file
                                          v-model="filess"
                                          v-on:change="addImg"
                                          @input="addImg(input.one,index)"
                                        />
                                      </md-field>
                                    </div>
                                    <div class="md-layout-item md-small-size-45 md-size-45">
                                      <md-field slot="content">
                                        <md-icon>radio_button_checked</md-icon>
                                        <label>ระบุคำตอบ</label>
                                        <md-input
                                          v-model="input.two"
                                          @input="addAns(input.two,index)"
                                          type="text"
                                        ></md-input>
                                      </md-field>
                                    </div>
                                    <div class="md-layout-item md-small-size-15 md-size-15">
                                      <md-button
                                        id="btn"
                                        class="md-danger md-icon-button md-dense"
                                        @click="deleteRow(index)"
                                      >
                                        <md-icon>delete</md-icon>
                                        <md-tooltip md-direction="bottom">ลบคำตอบ</md-tooltip>
                                      </md-button>
                                    </div>
                                  </div>

                                  <!-- <input type="text" v-model="input.one" />
                  - {{ input.one }}
                  <input type="text" v-model="input.two" />
                  - {{ input.two }}
                                  <button @click="deleteRow(index)">Delete</button>-->
                                </li>
                              </ul>
                              {{ question }}
                            </div>

                            <div class="md-layout-item md-small-size-10 md-size-10">
                              <md-menu md-size="medium" md-align-trigger>
                                <md-button class="md-primary md-just-icon md-round" md-menu-trigger>
                                  <md-icon>cached</md-icon>
                                </md-button>

                                <md-button
                                  class="md-primary md-just-icon md-round md-raised"
                                  @click="showDialog = true"
                                >
                                  <md-icon>extension</md-icon>
                                  <md-tooltip md-direction="bottom">คำอธิบาย</md-tooltip>
                                </md-button>

                                <md-menu-content>
                                  <!-- <md-menu-item>
                      <md-button class="md-simple md-sm" @click="onClickText">
                        <md-icon>short_text</md-icon>ข้อความสั้นๆ
                      </md-button>
                                  </md-menu-item>-->
                                  <md-menu-item>
                                    <md-button
                                      class="md-simple md-sm"
                                      @click="onClickGenericNot"
                                      v-on:click="close"
                                    >
                                      <md-icon>insert_photo</md-icon>ตัวเลือกประกอบรูปภาพ
                                    </md-button>
                                  </md-menu-item>
                                  <md-menu-item>
                                    <md-button class="md-simple md-sm">
                                      <md-icon>radio_button_checked</md-icon>ตัวเลือกข้อความ
                                    </md-button>
                                  </md-menu-item>
                                </md-menu-content>
                              </md-menu>
                            </div>
                          </div>
                        </md-card-content>

                        <md-card-actions md-alignment="right">
                          <slot name="footer">
                            <md-button
                              id="btn"
                              class="md-simple md-icon-button md-dense"
                              @click="onClickGeneric"
                            >
                              <md-icon>library_add</md-icon>
                              <md-tooltip md-direction="bottom">เพิ่มคำถาม</md-tooltip>
                            </md-button>
                            <!-- <md-button id="btn" class="md-simple md-icon-button md-dense">
                <md-icon>file_copy</md-icon>
                <md-tooltip md-direction="bottom">คัดลือกคำถาม</md-tooltip>
                            </md-button>-->
                            <!-- <md-button id="btn" class="md-simple md-icon-button md-dense">
                <md-icon>delete</md-icon>
                <md-tooltip md-direction="bottom">ลบคำถาม</md-tooltip>
                            </md-button>-->
                          </slot>
                        </md-card-actions>
                      </md-card>

                      <!-- --------------------------------- -->

                      <!-- <h2>Dynamically inserted:</h2>
        <button @click="onClick">Click to insert</button>
        <button @click="onClickText">Click to insert text</button>
        <button @click="onClickGeneric">Click to insert text</button>
                      <button @click="onClickQuickReply">Click to insert text</button>-->
                    </div>
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

                    <md-tab
                      id="tab-posts"
                      md-label="ตัวเลือกข้อความ"
                      md-icon="radio_button_checked"
                    >
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
          </div>
        </center>
      </div>
    </div>
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js"></script>
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.5.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.5.0/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
<script>
import { mapActions, mapState } from "vuex";
import Vue from "vue";
// import Text from "@/components/Form/Text";
import Generic from "@/components/Form/Generic";
import GenericNot from "@/components/Form/GenericNot";
// import QuickReply from "@/components/Form/QuickReply";
import { store } from "../store/store.js";
import { fireDb } from "../plugin/firebase";
import { db } from "../plugin/firebase";
import { storage } from "../plugin/firebase";
export default {
  store,
  name: "create-form",
  components: { Generic, GenericNot },
  props: {
    dataBackgroundColor: {
      type: String,
      default: "purple"
    }
  },
  //  created: function () {
  //     const store = this.$store;
  //    // register a new module only if doesn't exist
  //    if (!(store && store.state && store.state[name])) {
  //       store.registerModule(name, commonModule);
  //     } else {
  //       // re-use the already existing module
  //       console.log(`reusing module: ${name}`);
  //     }
  //   },
  data: () => ({
    icon:null,
    QestionName: null,
    formName: null,
    formDes: null,
    inputs: [],
    active: false,
    value: null,
    showDialog: false,
    iii: 0,
    Question: {},
    thumbnail:"",
    filess:"",
    files: [],

  }),
  // mounted() {
  //   var no = store.getters.no_question;
  //   this.Question.no_question = no;
  //   this.Question.question_type = "quick_reply";
  //   this.Question.number = store.getters.num
  // },
  methods: {
    // uploadimage: function(event) {
    //   //  console.log(event.target.files)
    //   //   alert(event.target.files)
    //   var picture = event.target.files[0];
    //   var storageRef = storage.ref(picture.name);
    //   storageRef.put(picture);
    //   this.thumbnail =
    //     "https://firebasestorage.googleapis.com/v0/b/" +
    //     "nekosurvey-8d127.appspot.com" +
    //     "/o/" +
    //     picture.name +
    //     "?alt=media";
    //   console.log(this.thumbnail);
    // },
    addIcon(){
       store.commit("SET_ICON", icon);
    },
    addtitle() {
      store.commit("SET_TITLEINSERT", formName);
    },
    addtitleDes() {
      store.commit("SET_TITLEINSERT", formDes);
    },
    addQuestion(data) {
      this.Question.question = data;
      var no = store.getters.no_question;
      this.Question.no_question = no;
      this.Question.question_type = "quick_reply";
      this.Question.number = store.getters.num;
    },
    addImg(img, i) {
      var picture = event.target.files[0];
      var storageRef = storage.ref(picture.name);
     
      
      storageRef.put(picture);
    
      this.thumbnail =
      
        "https://firebasestorage.googleapis.com/" +
         "nekosurvey-8d127.appspot.com/" +
  
        picture.name ;
      console.log(this.thumbnail);

      // switch (i) {
      //   case 0:
      //     this.Question.image1 = this.thumbnail;
      //     break;
      //   case 1:
      //     this.Question.image2 = img;
      //     break;
      //   case 2:
      //     this.Question.image3 = img;
      //     break;
      //   case 3:
      //     this.Question.image4 = img;
      //     break;
      //   case 4:
      //     this.Question.image5 = img;
      //     break;
      //   case 5:
      //     this.Question.image6 = img;
      //     break;
      //   case 6:
      //     this.Question.image7 = img;
      //     break;
      //   case 7:
      //     this.Question.image8 = img;
      //     break;
      //   case 8:
      //     this.Question.image9 = img;
      //     break;
      //   case 9:
      //     this.Question.image10 = img;
      //     break;
      // }
      // console.log(this.Question);

      // store.commit("SET_QUESTION", this.Question);
    },
    addAns(ans, i) {
      switch (i) {
        case 0:
          this.Question.answer1 = ans;
          break;
        case 1:
          this.Question.answer2 = ans;
          break;
        case 2:
          this.Question.answer3 = ans;
          break;
        case 3:
          this.Question.answer4 = ans;
          break;
        case 4:
          this.Question.answer5 = ans;
          break;
        case 5:
          this.Question.answer6 = ans;
          break;
        case 6:
          this.Question.answer7 = ans;
          break;
        case 7:
          this.Question.answer8 = ans;
          break;
        case 8:
          this.Question.answer9 = ans;
          break;
        case 9:
          this.Question.answer10 = ans;
          break;
      }
    },
    addRow() {
      this.inputs.push({
        one: "",
        two: ""
      });
      this.iii = this.iii + 1;
    },
    deleteRow(index) {
      this.inputs.splice(index, 1);
      this.iii = this.iii - 1;
    },
    // ...mapActions({
    //   getUser: 'getUser'
    // }),
    onConfirm() {
      this.value = "Agreed";
      store.dispatch("createForm");
    },
    onCancel() {
      this.value = "Disagreed";
    },
    close() {
      this.$refs.change.remove();
    },

    // onClickText() {
    //   var ComponentClass = Vue.extend(Text);
    //   var instance = new ComponentClass({
    //     propsData: { type: "primary" }
    //   });
    //   instance.$slots.default = ["Click me!"];
    //   instance.$mount(); // pass nothing
    //   //         console.log(this.$refs)
    //   this.$refs.container.appendChild(instance.$el);
    // },
    onClickGeneric() {
      store.commit("SET_QUESTION", this.Question);
      var ComponentClass = Vue.extend(Generic);
      var instance = new ComponentClass({
        propsData: { type: "primary" }
      });
      instance.$slots.default = ["Click me!"];
      instance.$mount(); // pass nothing
      console.log(this.$refs);
      this.$refs.container.appendChild(instance.$el);
    },
    onClickGenericNot() {
      var ComponentClass = Vue.extend(GenericNot);
      var instance = new ComponentClass({
        propsData: { type: "primary" }
      });
      instance.$slots.default = ["Click me!"];
      instance.$mount(); // pass nothing
      console.log(this.$refs);
      this.$refs.container.appendChild(instance.$el);
    }
    // onClickQuickReply() {
    //   var ComponentClass = Vue.extend(QuickReply);
    //   var instance = new ComponentClass({
    //     propsData: { type: "primary" }
    //   });
    //   instance.$slots.default = ["Click me!"];
    //   instance.$mount(); // pass nothing
    //   //         console.log(this.$refs)
    //   this.$refs.container.appendChild(instance.$el);
    // }
  },
  computed: {
    ...mapState({
      user: state => state.user,
      question: state => state.question
    })
  }
};
</script>

<style lang="scss" scoped>
.elevation-demo {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
}

.md-content {
  width: 200px;
  height: 200px;
  margin: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.md-dialog {
  max-width: 2000px;
}
.md-card-img {
  width: 400px;
  display: inline-block;
}
</style>
