<template>
  <div id="app">
    <Header />
    <main>
      <StoriesView />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import StoriesView from "./views/StoriesView.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    StoriesView
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

main {
  min-height: 100vh;
}
</style>
