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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* Spacings */
.mt-5 {
  margin-top: 5%;
}

.ml-5 {
  margin-left: 5%;
}

.mr-5 {
  margin-right: 5%;
}

.mt-3 {
  margin-top: 2%;
}

.mt-2 {
  margin-top: 2%;
}

.m-3 {
  margin: 3%;
}
.p-2 {
  padding: 2%;
}
.p-1 {
  padding: 1%;
}

html{
  margin: 0 !important;
}

</style>
