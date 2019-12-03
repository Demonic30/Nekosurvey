<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <center>
      <div id="card" class="md-layout-item md-medium-size-70 md-xsmall-size-70 md-size-70">
        
          <md-tabs class="md-accent" md-alignment="centered">
            <md-tab id="tab-home" md-label="Question" md-icon="question_answer">
              <update-form></update-form>
            </md-tab>

            <md-tab id="tab-pages" md-label="Feedback" md-icon="feedback">
              <user-card></user-card>
            </md-tab>
          </md-tabs>
        
      </div>
      <!-- <div class="md-layout-item md-medium-size-80 md-xsmall-size-80 md-size-80">
          <md-tabs class="md-accent" md-alignment="centered" md-sync-route>
            <md-tab id="tab-home" md-label="Question" to="/form">
              <edit-profile-form data-background-color="orange"></edit-profile-form>
            </md-tab>
            <md-tab id="tab-pages" md-label="Feedback" to="/feedback"></md-tab>
          </md-tabs>
      </div>-->
      </center>
      </div>
    </div>
  </div>
</template>

<script>
import { UpdateForm, UserCard } from "@/pages";

export default {
  name: "edit-form",
  //  props: {
  //   dataNumber: {
  //     type: String,
  //     default: ""
  //   }
  // },
  components: {
    UpdateForm,
    UserCard
  },

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
</style>
