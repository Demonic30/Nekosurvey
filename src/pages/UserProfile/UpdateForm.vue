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

      <md-card id="cards">
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
                    <md-file @input="addImg(input.one,index)" v-model="input.one" />
                    - {{ input.one }}
                  </md-field>
                  <md-field>
                    <md-icon>radio_button_checked</md-icon>
                    <label>ระบุคำตอบ</label>
                    <md-input type="text" @input="addAns(input.two,index)" v-model="input.two"></md-input>
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
              {{ Q1 }}
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
                      @click="onClickQuickReply"
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
            <md-button id="btn" class="md-simple md-icon-button md-dense" v-on:click="close">
              <md-icon>delete</md-icon>
              <md-tooltip md-direction="bottom">ลบคำถาม</md-tooltip>
            </md-button>
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
      </md-card>
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
#cards{
  margin-left: 20px;
  margin-right: 20px;
}
.md-dialog {
  max-width: 2000px;
}
.md-card-img {
  width: 400px;
  display: inline-block;
}
</style>



