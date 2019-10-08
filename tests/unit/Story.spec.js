import { shallowMount } from "@vue/test-utils";
import Story from "@/components/Story";
import storyMock from "@/__mocks__/story";

describe("Story component", () => {
  let props;

  const build = () => {
    const wrapper = shallowMount(Story, {
      propsData: props
    });
    return {
      wrapper,
      story: () => wrapper.find(".story"),
      title: () => wrapper.find(".story__title"),
      author: () => wrapper.find(".story__author"),
      score: () => wrapper.find(".story__score"),
      link: () => wrapper.find(".story__link"),
      text: () => wrapper.find(".story__text")
    };
  };

  beforeEach(() => {
    const { title, author, score, url, text } = storyMock[0];
    props = {
      title,
      author,
      score,
      url,
      text
    };
  });

  it("renders the component", () => {
    const { wrapper } = build();

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders main content elements", () => {
    const { title, author, score, link, text } = build();
    expect(title().exists()).toBe(true);
    expect(author().exists()).toBe(true);
    expect(score().exists()).toBe(true);
    expect(link().exists()).toBe(false);
    expect(text().exists()).toBe(true);
  });

  it("toggles its active state on click", () => {
    const { story } = build();

    expect(story().classes()).not.toContain("story--active");

    story().trigger("click");
    expect(story().classes()).toContain("story--active");

    story().trigger("click");
    expect(story().classes()).not.toContain("story--active");
  });

  it("renders url and/or complete text only in active state ", () => {
    const { story, link } = build();
    story().trigger("click");

    expect(link().exists()).toBe(true);
    expect(link().attributes().href).toBe(props.url);
  });

  it("handles upvote on click of upvote symbol", () => {
    const { score } = build();
    const vote = score().find(".story__vote");
    expect(vote.exists()).toBe(true);

    vote.trigger("click");
    expect(vote.classes()).toContain("story__vote--upvoted");
  });
});
