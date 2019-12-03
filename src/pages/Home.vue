<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="orange">
            <div>
              <center>
                <h4>Start a new form</h4>
              </center>
              <md-empty-state
                md-icon="devices_other"
                md-label="Create your first survey"
                md-description="Creating survey, you'll be able to upload your design and collaborate with people."
              >
                <md-button class="md-primary md-raised" to="/createform">Create new survey</md-button>
              </md-empty-state>
            </div>
          </md-card-header>
          <md-card-content>
            <center>
              <h4>Latest form</h4>
            </center>
            <div class="elevation-demo md-primary">
              <md-content v-for="(item, index) in title" :key="index" class="md-elevation md-primary">
                <md-card class="card">
                  <center>
                    <md-card-media class="md-img">
                      <img :src="title[index].icon" alt="People" />
                    </md-card-media>
                  </center>

                  <md-card-header class="md-text">
                    <div class="md-title">{{title[index].name}}</div>
                    <div class="md-subhead">{{title[index].description}}</div>
                  </md-card-header>

                  <md-card-expand>
                    <md-card-actions md-alignment="space-between">
                      <div>
                        <md-button @click="setNum(title[index].number)">Action</md-button>
                      </div>
                    </md-card-actions>
                  </md-card-expand>
                </md-card>
              </md-content>

              <!-- <md-content class="md-elevation-2 md-accent">{{user}}</md-content>
              <md-content class="md-elevation-3 md-accent">{{user}}</md-content>
              <md-content class="md-elevation-4 md-accent">{{user}}</md-content>
              <md-content class="md-elevation-5 md-accent">{{user}}</md-content>-->
            </div>
          </md-card-content>
          {{number}}
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "EmptyStateBasic",

  mounted() {
    this.$store.dispatch("getTitle");
  },
  computed: {
    ...mapState({
      title: state => state.title,
      number: state => state.number
    })
  },
  methods: {
    setNum(data) {
      this.$store.commit("SET_NUM", data), this.$router.push("form");
    }
  }
};
</script>

<style lang="scss" scoped>
.elevation-demo {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  text-overflow: ellipsis;
}
.md-title {
  font-size: 1em;
  line-height: 1em;
  height: 1em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

img {
  width: 200px;
  height: 400px;
  object-fit: cover;
}
.md-content {
  width: 350px;
  height: 300px;
  margin: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.md-img {
  height: 180px;
  display: inline-block;
}
.md-text{
height: 100px;
width: 200;
 
}
</style>
