<template>
  <div class="center grid">
    <div class="vertical-center" v-if="!init">
      <vs-row align="center" justify="center">
        <vs-col w="12" class="main-t">
          <span>Kilala mo ba siya?</span>
        </vs-col>
      </vs-row>

      <div class="row center-xs">
        <div class="col-xs-12 cc">
          <vs-button gradient size="xl" @click="startQuiz">
            Take Ligtas Points Meter Quiz
          </vs-button>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="row p-2">
        <div class="col-xs-12 sub-t">
          <span class="text-anim-grd text-emphasis-brd" @click="init = false"
            >LIGTAS POINTS METRE</span
          >
        </div>
      </div>

      <div class="row between-sm start-xs p-2 con-checkbox">
        <div class="col-xs-12 col-sm-6" v-for="(question, i) in questions" :key="i">
          <vs-checkbox success v-model="answers" :val="i">
            <b>{{ question.question }}</b>
          </vs-checkbox>
        </div>
      </div>

      <div class="row p-2">
        <div class="col-xs-12 mt-3">
          <vs-button gradient size="xl" @click="computeAnswers">
            📩 Submit your answers
          </vs-button>
        </div>
      </div>
    </div>

    <vs-dialog :loading="loading" v-model="dialog_model" prevent-close>
      <template #header>
        <h4 class="not-margin"> {{ computed_text }}</h4>
      </template>
      <div class="con-content">
          <p>Resuts {{ results }}</p>
      </div>
    </vs-dialog>
  </div>
</template>

<style scoped>
.container {
  background: #36d1dc; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #5b86e5,
    #36d1dc
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #5b86e5,
    #36d1dc
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.text-anim-grd {
  background: #36d1dc; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #5b86e5,
    #36d1dc
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #5b86e5,
    #36d1dc
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: 300%;
  letter-spacing: -4px;
  text-transform: uppercase;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: animated_text 5s ease-in-out infinite;
  -moz-animation: animated_text 3s ease-in-out infinite;
  -webkit-animation: animated_text 3s ease-in-out infinite;
}

.text-emphasis-brd {
  border-bottom: dashed 2px grey;
}

@keyframes animated_text {
  0% {
    background-position: 0px 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0px 50%;
  }
}

.main-t {
  font-size: 4em;
  font-family: "Roboto", sans-serif;
  font-weight: lighter !important;
  text-align: center;
}

.text-md {
  font-size: medium !important;
}

.text-1 {
  font-size: 1.3em !important;
}

.sub-t {
  font-size: 3em !important;
  font-family: "Roboto", sans-serif;
  font-weight: 900 !important;
}
.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.cc {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
}
</style>

<script>
import q_sets from "../../services/questions";

export default {
  name: "LigtasPoints",
  data: () => ({
    init: false,
    answers: [],
    loading: false,
    dialog_model: false,
    results: 0
  }),
  computed: {

    questions: () => {
      return q_sets.q_sets;
    },

    computed_text() {
        return this.loading ? 'Computing Results ...' : 'Your Results';
    }
  },

  methods: {
    startQuiz() {
      this.init = true;
      this.answers = [];
    },

    computeAnswers() {
      this.loading = true;
      this.dialog_model = true;

      let accumulation = 0;

      this.answers.map(answer => {
         if(this.questions[answer].answer === 1)
         {
             accumulation += 1;
         }
      });

      this.results = accumulation;
      this.loading = false;
      
    },
  },

  mounted() {},
};
</script>
