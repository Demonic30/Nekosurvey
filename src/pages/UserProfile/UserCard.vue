<template>
  <md-card>
    <md-card-header data-background-color="orange">
      <form novalidate @submit.stop.prevent="showSnackbar = true">
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-80">
            <br />
            <div for="snackbar-center" class="md-body-2">Answer 150</div>
            <br />
            <div class="md-body-2">SUMMARY INFORMATION</div>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-20">
            <center>
              <md-button class="md-icon-button md-dense md-raised md-primary">
                <md-icon>description</md-icon>
              </md-button>
              <p>Download Replies</p>
            </center>
            <md-switch >Open to answer</md-switch>
          </div>
        </div>
      </form>
    </md-card-header>
    <md-card-content>
      <chart-card
        :chart-data="dailySalesChart.data"
        :chart-options="dailySalesChart.options"
        :chart-type="'Line'"
        data-background-color="green"
      >
        <template slot="content">
          <h4 class="title">1.Age</h4>
          <p class="category">
            <span class="text-success">
              <i class="fa fa-reply"></i> 150
            </span>
            Answer
          </p>
        </template>

        <template slot="footer">
          <div class="stats">
            <md-icon>access_time</md-icon>updated 4 minutes ago
          </div>
        </template>
      </chart-card>
    </md-card-content>
  </md-card>
</template>

<script>
import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable
} from "@/components";

export default {
  name: "user-card",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  name: "SnackbarExample",
  data: () => ({
    showSnackbar: false,
    position: "center",
    duration: 4000,
    isInfinity: false
  }),
  components: {
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable
  },
  data() {
    return {
      dailySalesChart: {
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          series: [[12, 17, 7, 17, 23, 18, 38]]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      }
    };
  }
};
</script>
