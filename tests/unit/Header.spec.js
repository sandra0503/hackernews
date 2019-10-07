import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header";

describe("Header component", () => {
  const wrapper = shallowMount(Header);

  it("renders the component and matches snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
