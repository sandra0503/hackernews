<template>
  <div id="app">
    <StoriesView />
  </div>
</template>

<script>
import StoriesView from "./views/StoriesView.vue";

export default {
  name: "app",
  components: {
    StoriesView,
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
