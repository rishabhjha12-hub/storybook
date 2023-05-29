// YourComponent.stories.ts

import type { Meta, StoryObj } from "@storybook/vue3";

import Dropdown1 from "./DropdownWithoutSearch.vue";

const meta: Meta<typeof Dropdown1> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Dropdown1",
  component: Dropdown1,
  tags: ["autodocs"],
};

//👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof Dropdown1>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { Dropdown1 },
    setup() {
      return { args };
    },
    template: '<Dropdown1 v-bind="args" />',
  }),
  args: {
    options: [
      { value: "Option 1" },
      { value: "Option 2" },
      { value: "Option 3" },
    ],
  },
};
