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
            <div class="elevation-demo">
              <md-content class="md-elevation-1 md-primary">1</md-content>
              <md-content class="md-elevation-2 md-accent">2</md-content>
              <md-content class="md-elevation-3">3</md-content>
              <md-content class="md-elevation-4">4</md-content>
              <md-content class="md-elevation-5">5</md-content>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmptyStateBasic"
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
