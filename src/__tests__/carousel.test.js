import { shallowMount } from "@vue/test-utils";
import Carousel from "./components/Carousel.component.vue";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Carousel, {
    propsData: {},
    mocks: {},
    stubs: {},
    methods: {},
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("Carousel", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
