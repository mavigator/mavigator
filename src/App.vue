<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
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


</style>
