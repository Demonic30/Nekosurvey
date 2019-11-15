<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <center>
        <div class="md-layout-item md-medium-size-70 md-xsmall-size-70 md-size-70">
          <edit-profile-form data-background-color="purple"></edit-profile-form>
        </div>
      </center>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import Vue from "vue";

import { EditProfileForm } from "@/pages";

export default {
  components: {
    EditProfileForm
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

</style>
