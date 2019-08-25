import { mount, RouterLinkStub } from "@vue/test-utils";
import index from "./index.vue";

describe("index", () => {
	it("renders book details when passed", () => {
		const wrapper = mount(index, { stubs: { RouterLink: RouterLinkStub } });
		expect(wrapper.isVueInstance()).toBeTruthy();
	});
});
