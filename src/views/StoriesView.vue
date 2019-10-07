<template>
  <div class="stories-view">
    <Header />
    <main class="stories">
      <Story
        v-for="story in stories"
        :key="story.id"
        :author="story.by"
        :score="story.score"
        :text="story.text"
        :title="story.title"
        :url="story.url"
      />
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Story from "../components/Story.vue";

export default {
  name: "StoriesView",
  components: {
    Header,
    Footer,
    Story
  },
  computed: {
    ...mapState({
      stories: "stories"
    })
  }
};
</script>

<style lang="scss">
.stories {
  padding: 20px;
  display: grid;
  grid-gap: 10px;
  grid-auto-flow: dense;
  grid-auto-rows: 100px;
}

@media only screen and (min-width: 768px) {
  .stories {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 160px;
  }
}

@media only screen and (min-width: 1000px) {
  .stories {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 160px;
  }
}

@media only screen and (min-width: 1400px) {
  .stories {
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 160px;
  }
}
</style>
