<template>
  <div ref="container">
    <div ref="change">
      <md-card>
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-small-size-90 md-size-90">
              <md-field slot="content">
                <label>คำถาม</label>
                <md-input type="text"></md-input>
              </md-field>

              <div v-if="iii == 0 || iii == 1 || iii == 2 || iii == 3">
                <md-button id="btn" class="md-success md-icon-button md-dense" @click="addRow">
                  <md-icon>add_box</md-icon>
                  <md-tooltip md-direction="bottom">เพิ่มคำตอบ</md-tooltip>
                </md-button>
              </div>
              <!-- <md-button id="btn" class="md-danger md-icon-button md-dense" @click="deleteRow(index)">
                  <md-icon>delete</md-icon>
                  <md-tooltip md-direction="bottom">ลบคำตอบ</md-tooltip>
              </md-button>-->

              <ul>
                <li v-for="(input, index) in inputs" :key="input.id">
                  <md-field>
                    <label>เพิ่มรูปภาพ</label>
                    <md-file class="text" @input="addImg(input.one,index)" v-model="input.one" />
                    - {{ input.one }}
                  </md-field>
                  <md-field>
                    <md-icon>radio_button_checked</md-icon>
                    <label>ระบุคำตอบ</label>
                    <md-input class="text" @input="addAns(input.two,index)" v-model="input.two"></md-input>
                    - {{ input.two }}
                    <md-button
                      id="btn"
                      class="md-danger md-icon-button md-dense"
                      @click="deleteRow(index)"
                    >
                      <md-icon>delete</md-icon>
                      <md-tooltip md-direction="bottom">ลบคำตอบ</md-tooltip>
                    </md-button>
                  </md-field>
                  {{ input }}
                  {{ index }}
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
                    <md-button class="md-simple md-sm">
                      <md-icon>insert_photo</md-icon>ตัวเลือกประกอบรูปภาพ
                    </md-button>
                  </md-menu-item>
                  <md-menu-item>
                    <md-button
                      class="md-simple md-sm"
                      @click="onClickQuickReplyNot"
                      v-on:click="close"
                    >
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
              @click="onClickQuickReply"
            >
              <md-icon>library_add</md-icon>
              <md-tooltip md-direction="bottom">เพิ่มคำถาม</md-tooltip>
            </md-button>
            <!-- <md-button id="btn" class="md-simple md-icon-button md-dense">
          <md-icon>file_copy</md-icon>
          <md-tooltip md-direction="bottom">คัดลอกคำถาม</md-tooltip>
            </md-button>-->
          </slot>
        </md-card-actions>

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

              <md-tab md-label="ตัวเลือกประกอบรูปภาพ" md-icon="insert_photo">
                <center>
                  <div class="md-card-img">
                    <img src="@/assets/img/2.png" alt="Cover" />
                  </div>
                </center>
              </md-tab>

              <md-tab md-label="ตัวเลือกข้อความ" md-icon="radio_button_checked">
                <center>
                  <div class="md-card-img">
                    <img src="@/assets/img/3.png" alt="Cover" />
                  </div>
                </center>
              </md-tab>
            </md-tabs>

            <md-dialog-actions>
              <md-button class="md-primary" @click="showDialog = false">
                <h5>Close</h5>
              </md-button>
            </md-dialog-actions>
          </md-dialog>
        </div>
      </md-card>
    </div>
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js"></script>

<script>
import Vue from "vue";
// import Text from "@/components/Form/Text";

import QuickReplyNot from "@/components/Form/QuickReplyNot";
import QuickReply from "@/components/Form/QuickReply";

export default {
  name: "GenericNot",
  components: { QuickReplyNot, QuickReply },
  name: "DialogConfirm",

  data: () => ({
    inputs: [],
    active: false,
    value: null,
    showDialog: false,
    iii: 0,
    image1: null,
    image2: null,
    number: 4,
    question: null,
    question_type: "generic",
    answer1: null,
    answer2: null,
    no_question: 1,
    status: 0,
    Q1: {}
  }),
  methods: {
    addImg(img, i) {
      switch (i) {
        case 0:
          this.Q1.image1 = img;
          break;
        case 1:
          this.Q1.image2 = img;
          break;
        case 2:
          this.Q1.image3 = img;
          break;
        case 3:
          this.Q1.image4 = img;
          break;
      }
    },
    addAns(ans, i) {
      switch (i) {
        case 0:
          this.Q1.answer1 = ans;
          break;
        case 1:
          this.Q1.answer2 = ans;
          break;
        case 2:
          this.Q1.answer3 = ans;
          break;
        case 3:
          this.Q1.answer4 = ans;
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
    onConfirm() {
      this.value = "Agreed";
    },
    onCancel() {
      this.value = "Disagreed";
    },
    close() {
      this.$refs.change.remove();

      // // destroy the vue listeners, etc
      // this.$destroy();
      // // document.getElementById('change').$destroy();
      // // remove the element from the DOM
      // // this.$root.$el.parentNode.removeChild(this.$root.$el);

      // this.$el.parentNode.removeChild(this.$el('.change'));
    },
    //  onClickText() {
    //   var ComponentClass = Vue.extend(Text);
    //   var instance = new ComponentClass({
    //     propsData: { type: "primary" }
    //   });
    //   instance.$slots.default = ["Click me!"];
    //   instance.$mount(); // pass nothing
    //   //         console.log(this.$refs)
    //   this.$refs.container.appendChild(instance.$el);
    // },
    onClickQuickReply() {
      var ComponentClass = Vue.extend(QuickReply);
      var instance = new ComponentClass({
        propsData: { type: "primary" }
      });
      instance.$slots.default = ["Click me!"];
      instance.$mount(); // pass nothing
      //         console.log(this.$refs)
      this.$refs.container.appendChild(instance.$el);
    },
    onClickQuickReplyNot() {
      var ComponentClass = Vue.extend(QuickReplyNot);
      var instance = new ComponentClass({
        propsData: { type: "primary" }
      });
      instance.$slots.default = ["Click me!"];
      instance.$mount(); // pass nothing
      //         console.log(this.$refs)
      this.$refs.container.appendChild(instance.$el);
    }
  },
  props: ["type"]
};
</script>
<style scoped>
button.primary {
  background: blue;
  color: white;
}
.md-dialog {
  max-width: 2000px;
}
.md-card-img {
  width: 400px;
  display: inline-block;
}
</style>
