import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/Footer";

describe("Footer component", () => {
  const wrapper = shallowMount(Footer);

  it("renders the component and matches snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
