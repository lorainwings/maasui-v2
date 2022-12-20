import Button from "../Button";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("test button text", () => {
  test("mount  @vue/test-utils", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(wrapper.text()).toBe("Button");
  });
});

describe("test button color", () => {
  test("default color", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-blue-500")
    ).toBe(true);
  });

  test("color red", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        color: "red",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-red-500")
    ).toBe(true);
  });
});

describe("test button round", () => {
  test("default round", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("rounded-lg")
    ).toBe(true);
  });

  test("round true", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        round: true,
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("rounded-full")
    ).toBe(true);
  });
});

describe("test button plain", () => {
  test("default plain", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("text-white-500")
    ).toBe(true);
  });

  test("plain true", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        plain: true,
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("text-blue-500")
    ).toBe(true);
  });
});

describe("test button size", () => {
  test("default size", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("py-1.5")
    ).toBe(true);
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("px-3")
    ).toBe(true);
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("text-base")
    ).toBe(true);
  });

  test("size large", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        size: "large",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("py-2")
    ).toBe(true);
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("px-4")
    ).toBe(true);
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("text-lg")
    ).toBe(true);
  });
});

describe("test button icon", () => {
  test("default without icon", () => {
    const wrapper = shallowMount(Button);
    expect(wrapper.find("i").exists()).toBe(false);
  });

  test("icon is search", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        icon: "search",
      },
    });
    expect(
      wrapper
        .find("i")
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("i-ic-baseline-search")
    ).toBe(true);
  });
});
