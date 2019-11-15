<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item ">
        <center>
          <md-card>
            <md-card-header data-background-color="orange">
              <div class="md-card-avatar1">
                <img class="img" :src="cardUserImage" />
              </div>
              <h4 class="title">
                <div class="md-card-avatar2">
                  <img class="img" :src="cardUserFont" />
                </div>
              </h4>
              <p class="category">Here is a subtitle for this table</p>
            </md-card-header>
            <md-card-content>
              <div>
                <md-field md-clearable>
                  <label>E-mail</label>
                  <md-input ></md-input>
                  <!-- <md-input v-model="initial"></md-input> -->
                </md-field>

                <md-field>
                  <label>Password</label>
                  <md-input type="password"></md-input>
                  <!-- <md-input v-model="password" type="password"></md-input> -->
                </md-field>
              </div>
              <sidebar-link to="/home">
                <md-button class="md-raised md-primary">
                  <md-icon>account_box</md-icon>
                  <p>Sign In</p>
                </md-button>
              </sidebar-link>
            </md-card-content>
          </md-card>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/Logo.png")
    },
    cardUserFont: {
      type: String,
      default: require("@/assets/img/Fontlogo.png")
    }
  },
  // name: "InlineActions",
  // data: () => ({
  //   initial: "Initial Value",
  //   password: "mysecurepassword"
  // }),
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.md-card {
  height: 550px;
  width: 600px;
}
.md-card-avatar1 {
  width: 100px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.md-card-avatar2 {
  width: 300px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.md-card-header {
  width: 500px;
  margin: center;
  display: inline-block;
  vertical-align: top;
}

.md-field:last-child {
  margin-bottom: 40px;
}

.md-button {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>