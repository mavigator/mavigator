<template>
  <div class="center grid">
    <div class="vertical-center" v-if="!init">
      <vs-row align="center" justify="center">
        <vs-col w="12" class="main-t">
          <span>Kilala mo ba sila?</span>
        </vs-col>
      </vs-row>

      <div class="row center-xs">
        <div class="col-xs-12 cc">
          <vs-button gradient size="xl" @click="startQuiz">
            Take Ligtas Points Quiz Game
          </vs-button>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="row p-2">
        <div class="col-xs-12 sub-t">
          <span class="text-anim-grd text-emphasis-brd" @click="init = false"
            >LIGTAS POINTS</span
          >
        </div>
      </div>

      <div class="row between-sm cemter-xs p-2 con-checkbox">
        <div class="col-xs-12 col-sm-12" v-for="(question, i) in questions" :key="i">
          <vs-checkbox success v-model="answers" :val="`k-${i}`">
            <b>{{ `${question.question}` }}</b>
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
        <h4 class="not-margin">{{ computed_text }}</h4>
      </template>
      <div class="con-content">
        <vs-row align="center" justify="center">
          <vs-button gradient size="xl" @click="viewResults">
            🎉 View your results here
          </vs-button>
        </vs-row>
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
    questions: [],
    rd_questions: [],
    list_index: [],
    accumulation: 20
  }),
  computed: {
    computed_text() {
      return this.loading ? "Computing Results ..." : "Results";
    },

    results(){
        return (this.accumulation / this.questions.length) * 100;
    }
  },

  watch: {
    answers: function(n, o) {
        //
    },
  },

  methods: {
    startQuiz() {
      this.init = true;
      this.answers = [];
      this.list_index = [];
      this.rd_questions = q_sets.q_sets;
      let lq = [];

      while (lq.length !== 20) {
        //get the random index
        let random_index = Math.floor(Math.random() * this.rd_questions.length);

        //check if the index is not existing in the list of indexes
        if (this.list_index.indexOf(random_index) === -1) {
            
            //TODO: make sure 1 special exists
            let adding_proc = (isSpecial = false) => {
                lq.push(this.rd_questions[random_index]); //add to the list of question
                this.list_index.push(random_index); //add to the list of indexes
            }

            adding_proc();
          
        }

      }

      this.questions = lq;
    },

    computeAnswers() {
      this.loading = true;
      this.dialog_model = true;

      let keys = this.list_index;
      
      //Get all answers first and check 
      this.answers.map((answer) => {
        let q_data = this.questions[parseInt(answer.replace("k-", ""))];
        
        if (q_data.answer === 1) {
          this.accumulation += (q_data.special === 1 ? 1 : 0);
          //TODO: special questions will saved to firebase firestore
        }
        else if(q_data.answer === 0)
        {
            this.accumulation -= 1;
        }

        //keys.splice(parseInt(answer.replace("k-", ""), 1));
      });

      this.loading = false;
    },

    viewResults() {
      this.$router.push({
        path: `/ligtas_points_meter_results/${btoa(this.results)}`,
      });
    },
  },

  mounted() {},
};
</script>
