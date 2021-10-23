<template>
  <div>
    <vs-navbar text-white color="dark" center-collapsed v-model="active" not-line>
      <template #left> MAVIGATOR </template>

      <vs-navbar-item :active="active == 'home'" href="#home"> Home </vs-navbar-item>
      <vs-navbar-item :active="active == 'ablaze'" href="#ablaze"> Project Ablaze </vs-navbar-item>
      <vs-navbar-item :active="active == 'reachout'" href="/ligtas_points_meter"> Reach Out </vs-navbar-item>

      <template #right>
        <vs-button> <i class="bx bxl-google-plus"></i> &nbsp; Join Us</vs-button>
      </template>
    </vs-navbar>

    <main role="main">
      <div id="home">
        <div class="home-overlay" style="height: 100vh">
          <div class="container-fluid">
            <div class="row">
              <div class="text-center col-lg-12 col-md-12 col-sm-12">
                <div style="margin-top: 18%">
                  <h1 style="font-size: 36pt" class="text-white">
                    Unreached People Group
                  </h1>
                  <h1
                    class="greenify"
                    style="font-size: 84pt; letter-spacing: 16px; margin-top: -1%"
                    id="numR"
                  >
                    0
                  </h1>
                  <h3 style="margin-top: -1%" class="text-white">
                    41.8% of World's Population
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Marketing messaging and featurettes
      ================================================== -->
      <!-- Wrap the rest of the page in another container to center all the content. -->

      <div class="container marketing">
        <!-- Three columns of text below the carousel -->
        <div class="row mt-5 mb-3">
          <div class="col-12 text-center">
            <h2>Unreached Peoples that needs your prayer</h2>
          </div>
        </div>
        <div class="row">
          <div v-for="(pd, i) in urpd" :key="i" class="col-xs-12 col-sm-4">
            <vs-card>
              <template #title>
                <h3>{{ pd.name }}</h3>
              </template>
              <template #img>
                <img :src="pd.img" alt="" />
              </template>
              <template #text>
                <p>{{ pd.location }}</p>
              </template>
              <template #interactions>
                <vs-button danger icon :href="pd.link">
                  <i class="bx bx-heart"></i>
                </vs-button>
              </template>
            </vs-card>
          </div>
        </div>
        <!-- /.row -->

        <!-- START THE FEATURETTES -->

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              Unreached People Group.
              <span class="text-muted">Who are they?</span>
            </h2>
            <p class="lead">
              An unreached or least-reached people is a people group among which there is no indigenous community of believing Christians with adequate numbers and resources to evangelize this people group without outside assistance.
            </p>
          </div>
          <div class="col-md-5">
            <img
              class="featurette-image img-fluid mx-auto"
              src="../assets/bg.png"
              alt="ugp"
            />
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette" id="ablaze">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">
             Project Ablaze, <span class="text-muted">project to set fire in your heart</span>
            </h2>
            <p class="lead">
              The <b>VISION</b> of ABLAZE is to see that the passion and burden to bring the Gospel to the Unreached People Groups be ignited and set-ablaze among the hearts of the believers, especially, young people.
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            <img
              class="featurette-image img-fluid mx-auto"
              src="../assets/ablaze.png"
              alt="Ablaze"
            />
            
            <p class="lead pt-4">
              Contact Project Ablaze and Join their Mission:
              <ul class="list-group">
                <li class="list-group-item"><a href="https://projectablaze.weebly.com/contact.html" target="_blank">Contact</a></li>
                <li class="list-group-item"><a href="https://projectablaze.weebly.com/about.html" target="_blank">About their mission</a></li>
                <li class="list-group-item"><a href="https://www.youtube.com/channel/UCLJKd6wA4tzOEYUCl6wFEFA" target="_blank">Subscribe to their YouTube Channel</a></li>
              </ul>
            </p>
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
             Wake up!<span class="text-muted"> Join us.</span>
            </h2>
            <p class="lead">
              You could visit these following resources and 
              Let's bring the light to the unreached people.
            </p>
          </div>
          <div class="col-md-5">
            <ul class="list-group">
              <li class="list-group-item"><a href="https://joshuaproject.net" target="_blank">Joshua Project</a></li>
              <li class="list-group-item"><a href="https://grd.imb.org" target="_blank">IMB (International Missions Board)</a></li>
              <li class="list-group-item"><a href="https://globe.stratus.earth/" target="_blank">Stratus Earth</a></li>
              <li class="list-group-item"><a href="http://www.operationworld.org" target="_blank">Operation World</a></li>
            </ul>
          </div>
        </div>

        <hr class="featurette-divider" />

        <!-- /END THE FEATURETTES -->
      </div>
      <!-- /.container -->

      <!-- FOOTER -->
      <footer class="container">
        <p class="float-right"><a href="#">Back to top</a></p>
      </footer>
    </main>
  </div>
</template>

<style scoped>
/* GLOBAL STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */
#home {
  background: url("../assets/bg.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.home-overlay {
  background-color: rgba(44, 62, 80, 0.5);
  background-image: url("../assets/pattern.png");
  background-repeat: repeat;
  height: 100%;
  width: 100%;
}

.greenify {
  color: #fbbc05;
  -webkit-transition: color 0.5s ease-in-out, opacity 0.5s ease;
  -moz-transition: color 0.5s ease-in-out, opacity 0.5s ease;
  transition: color 0.5s ease-in-out, opacity 0.5s ease;
}

/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 32rem;
  background-color: #777;
}
.carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 32rem;
}

/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
.marketing .col-lg-4 p {
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}

/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.05rem;
}

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}
</style>

<script>
// @ is an alias to /src
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { CountUp } from "countup.js";
import axios from "axios";

export default {
  name: "Home",
  data: () => ({
    active: "home",
    urpd: [],
  }),

  mounted() {
    let x = new CountUp("numR", 3275114000);
    x.start();
    let cd = Date.now();
    let d = new Date(cd);
    for (let index = 1; index <= 3; index++) {
      axios
        .get(
          `https://api.joshuaproject.net/v1/people_groups/daily_unreached.json?api_key=817665b7d85d&day=${
            d.getDate() + (index - 1)
          }&month=${d.getMonth() + index}`
        )
        .then((data) =>
          this.urpd.push({
            img: data.data[0].PeopleGroupPhotoURL,
            name: data.data[0].PeopNameAcrossCountries,
            link: data.data[0].PeopleGroupURL,
            location: data.data[0].AffinityBloc,
          })
        );
    } //817665b7d85d
  },
};
</script>
