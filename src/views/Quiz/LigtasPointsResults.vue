<template>
  <div class="center grid mt-5">
    <div class="row center-xs">
      <div class="col-xs-12 sub-t">
        <span class="text-anim-grd text-emphasis-brd">LIGTAS POINTS METRE</span>
      </div>
      <div class="row center-xs">
        <h2>You've got {{ result_ }}%</h2>
      </div>
      <div v-if="result_status === 1" class="col-xs-12">
        <img
          src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif"
          width="500"
          height="500"
          alt="mind_blown"
        />
      </div>
      <div v-else-if="result_status === 2" class="col-xs-12">
        <img
          src="https://media.giphy.com/media/lRpD28vbtrqq2zpaKS/giphy.gif"
          width="500"
          height="500"
          alt="omg"
        />
      </div>
      <div v-else-if="result_status === 3" class="col-xs-12">
        <img
          src="https://media.giphy.com/media/yJFeycRK2DB4c/giphy.gif"
          width="500"
          height="500"
          alt="noice"
        />
      </div>
      <div v-else-if="result_status === 4" class="col-xs-12">
        <img
          src="https://media.giphy.com/media/3o752iMOu3ZvSO5Vja/giphy.gif"
          width="500"
          height="500"
          alt="noice"
        />
      </div>

      <vs-button icon color="facebook">
        <i class="bx bxl-facebook-square"></i>
      </vs-button>
    </div>
  </div>
</template>

<style scoped>
.sub-t {
  font-size: 3em !important;
  font-family: "Roboto", sans-serif;
  font-weight: 900 !important;
}
</style>

<script>
export default {
  name: "LigtasPointsResults",

  data: () => ({
    result_status: 0,
  }),

  computed: {
    result_() {
      return this.$route.params.results_data !== undefined
        ? atob(this.$route.params.results_data)
        : "";
    },
  },

  methods: {
    showResults() {
      // TODO: refractor this part
      if (this.result_ >= 90) {
        this.result_status = 1;
      } else if (this.result_ >= 60 && this.result_status <= 89) {
        this.result_status = 2;
      } else if (this.result_ >= 40 && this.result_status <= 59) {
        this.result_status = 3;
      } else if (this.result_status <= 39) {
        this.result_status = 4;
      }
    },
  },

  mounted() {
    this.showResults();
  },
};
</script>
