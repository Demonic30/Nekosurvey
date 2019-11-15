<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <div class="md-layout-item">
          <md-field class="md-primary">
            <label>ชื่อฟอร์ม</label>
            <md-input></md-input>
          </md-field>
          <md-field>
            <label>คำอธิบายแบบฟอร์ม</label>
            <md-input></md-input>
            <span class="md-helper-text"></span>
          </md-field>
        </div>
      </md-card-header>

      <md-card-content>
        <div ref="container">
          <div ref="change">
            <md-card>
              <md-card-content>
                <div class="md-layout">
                  <div class="md-layout-item md-small-size-90 md-size-90">
                    <md-field slot="content">
                      <label>คำถาม</label>
                      <md-input type="text" v-model="question"></md-input>
                    </md-field>
                    <div class="md-layout">
                      <div class="md-layout-item md-small-size-40 md-size-40"></div>
                      <div class="md-layout-item md-small-size-45 md-size-45"></div>
                      <div class="md-layout-item md-small-size-15 md-size-15">
                        <div v-if="iii == 0 || iii == 1 || iii == 2 || iii == 3">
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
                              <md-file v-model="input.one" />
                              <md-input v-model="input.one" type="text"></md-input>
                            </md-field>
                          </div>
                          <div class="md-layout-item md-small-size-45 md-size-45">
                            <md-field slot="content">
                              <md-icon>radio_button_checked</md-icon>
                              <label>ระบุคำตอบ</label>
                              <md-input v-model="input.two" type="text"></md-input>
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
                            @click="onClickGeneric"
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
              <md-button
                class="md-primary md-raised"
                @click="active = true"
                v-on:click="createForm"
              >Confirm</md-button>
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
import { mapActions, mapState } from "vuex";
import Vue from "vue";
// import Text from "@/components/Form/Text";
import Generic from "@/components/Form/Generic";
// import QuickReply from "@/components/Form/QuickReply";

export default {
  // store,
  name: "edit-profile-form",
  components: { Generic },
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      image1: inputs.one,
      image2: inputs.one,
      image3: inputs.one,
      image4: inputs.one,
      number: number,
      question: question,
      question_type: question_type,
      answer1: inputs.two,
      answer2: inputs.two,
      answer3: inputs.two,
      answer4: inputs.two,
      no_question: no_question
    };
  },
  name: "DialogConfirm",
  data: () => ({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    number: 4,
    question: "",
    question_type: "quick_reply",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    no_question: 1,
    inputs: [],
    active: false,
    value: null,
    showDialog: false,
    iii: 0
  }),
  methods: {
    ...mapActions({
      getUser: "getUser",
      createForm: "createForm"
    }),

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

      axios
        .post("http://jsonplaceholder.typicode.com/posts", {
          title: this.postTitle,
          body: this.postBody
        })
        .then(response => {})
        .catch(e => {
          console.error(e);
        });
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
      var ComponentClass = Vue.extend(Generic);
      var instance = new ComponentClass({
        propsData: { type: "primary" }
      });
      instance.$slots.default = ["Click me!"];
      instance.$mount(); // pass nothing
      //         console.log(this.$refs)
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
      user: state => state.user
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



