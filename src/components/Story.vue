<template>
  <div class="story" @click="onClick" :class="{ 'story--active': isActive }">
    <div class="story__score">
      <span
        :class="{ story__vote: true, 'story__vote--upvoted': isUpvoted }"
        @click.stop.prevent="onUpvote"
      />
      <span v-if="score" class="story__score-value">{{ score }}</span>
    </div>
    <div class="story__content">
      <div class="story__title">{{ strippedTitle }}</div>
      <div class="story__author">
        by
        <span v-if="author" class="story__author-name">{{ author }}</span>
      </div>
      <div v-if="strippedText" class="story__text" v-html="strippedText"></div>
      <a v-if="linkUrl" class="story__link" target="__blank" :href="linkUrl">
        {{ linkUrl }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Story",
  data() {
    return {
      isActive: false,
      isUpvoted: false
    };
  },
  props: {
    title: {
      type: String
    },
    author: {
      type: String
    },
    score: {
      type: Number
    },
    url: {
      type: String
    },
    text: {
      type: String
    }
  },
  computed: {
    strippedTitle() {
      if (!this.isActive && this.title && this.title.length > 90) {
        return `${this.title.slice(0, 89)}...`;
      }
      return this.title;
    },
    strippedText() {
      if (!this.isActive && this.text && this.text.length > 43) {
        return `${this.text.slice(0, 42).replace(/[\r\n<p></p>]/g, " ")}...`;
      }
      return this.text;
    },
    linkUrl() {
      return this.isActive ? this.url : null;
    }
  },
  methods: {
    onClick() {
      this.isActive = !this.isActive;
    },
    onUpvote() {
      this.isUpvoted = true;
    }
  }
};
</script>

<style lang="scss" scoped="true">
.story {
  display: flex;
  padding: 10px;
  overflow: hidden;
  transition: background 0.3s;
  border: 1px solid rgba(232, 236, 241, 1);
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: rgba(232, 236, 241, 0.5);
  }

  &.story--active {
    grid-area: span 2 / span 1;
    background-color: rgba(232, 236, 241, 0.5);
  }
}

.story__score {
  width: 26px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 10px;
  font-size: 12px;
}

.story__vote {
  padding: 5px;
  margin-top: -15px;
  align-self: center;

  &:before {
    content: "";
    display: inline-flex;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 16px solid #009688;
    transition: border 0.2s;
  }

  &:hover {
    &:before {
      border-bottom-color: #00ccb8;
    }
  }

  &.story__vote--upvoted {
    &:before {
      border-bottom-color: #00ccb8;
    }
  }
}

.story__content {
  font-size: 14px;
}

.story__title {
  font-size: 15px;
  font-weight: 500;
}

.story__link {
  word-break: break-all;
  text-decoration: none;
  color: #009688;

  &:hover {
    color: #00ccb8;
  }
}

.story__author {
  color: #808080;
  margin-bottom: 5px;
}

.story__text {
  margin-bottom: 10px;
}

@media only screen and (min-width: 768px) {
  .story {
    &.story--active {
      grid-area: span 2 / span 2;
    }
  }
}
</style>
