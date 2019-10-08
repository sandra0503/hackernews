import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import StoriesView from "@/views/StoriesView";
import Story from "@/components/Story";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import initialState from "@/store/state";
import storyMock from "@/__mocks__/story";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("StoriesView", () => {
  let state;

  const build = () => {
    const wrapper = shallowMount(StoriesView, {
      localVue,
      store: new Vuex.Store({ state })
    });

    return {
      wrapper,
      story: () => wrapper.find(Story),
    };
  };

  beforeEach(() => {
    state = { ...initialState };
  });

  it("renders the component", () => {
    const { wrapper } = build();

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders child components", () => {
    state.stories = storyMock;
    const { story, header, footer } = build();

    expect(story().exists()).toBe(true);
  });

  it("passes binded content props to content item components", () => {
    state.stories = storyMock;
    const { story } = build();

    expect(story().vm.title).toBe(state.stories[0].title);
    expect(story().vm.text).toBe(state.stories[0].text);
    expect(story().vm.author).toBe(state.stories[0].by);
    expect(story().vm.url).toBe(state.stories[0].url);
    expect(story().vm.score).toBe(state.stories[0].score);
  });
});
