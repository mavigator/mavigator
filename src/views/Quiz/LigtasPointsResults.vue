<template>
  <div class="center grid mt-5">
    <div class="row center-xs">
      <div class="col-xs-12 sub-t">
        <span class="text-anim-grd text-emphasis-brd">LIGTAS POINTS</span>
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
      
    </div>

    <div class="vertical-center">
      <div
          class="fb-share-button"
          data-href="https://developers.facebook.com/docs/plugins/"
          data-layout="button"
          data-size="large"
        >
          <vs-button
            icon
            color="facebook"
            target="_blank"
            href="https://mavigator-mavigator.vercel.app/ligtas_points_meter"
            class="sub-t1"
          >
            <i class='bx bxl-facebook-square sub-t1'></i>
            Share
          </vs-button>
        </div>
    </div>

    <vs-dialog not-close prevent-close v-model="active">
      <template #header>
        <h4 class="not-margin text-center">
          Thank you for playing<br /><b>LIGTAS POINTS METRE QUIZ GAME</b>
        </h4>
      </template>

      This simple quiz app is developed to measure your "LIGTAS POINTS", Ligtas Points is
      not focused about the salvation but the power how you really know the one above,
      There are plenty people aren't aware or unable to reach out the light. We need to
      help them, We need to bring them to the light. By sharing this game and visiting our
      web platform. It is a big help and contribution to us.

      <template #footer>
        <div class="footer-dialog">
          <vs-button block gradient @click="offAnn"> Visit the web platform</vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<style scoped>
.sub-t {
  font-size: 3em !important;
  font-family: "Roboto", sans-serif;
  font-weight: 900 !important;
}

.sub-t1 {
  font-size: 2em !important;
  font-family: "Roboto", sans-serif;
  font-weight: 900 !important;
}

.vertical-center {
  margin: 0;
  position: absolute;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>

<script>
export default {
  name: "LigtasPointsResults",

  data: () => ({
    result_status: 0,
    active: false,
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

    offAnn() {
      this.active = false;
      window.open("/", "_blank");
    },
  },

  mounted() {
    this.showResults();
    this.active = true;
    document
      .querySelector('meta[property="og:url"]')
      .setAttribute(
        "content",
        "https://mavigator-mavigator.vercel.app/ligtas_points_meter"
      );
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", `I GOT ${this.result_} % LIGTAS POINTS `);
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute("content", `Try our Ligtas Points Quiz App`);
    document
      .querySelector('meta[property="og:image"]')
      .setAttribute(
        "content",
        `https://wpshout.com/wp-content/uploads/2016/10/carl_sagan_mind_blown-e1476180767148-870x400.jpg`
      );
  },
};
</script>
