// YourComponent.stories.ts

import type { Meta, StoryObj } from "@storybook/vue3";

import Collapsible from "./Collapsible.vue";

const meta: Meta<typeof Collapsible> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
};

//👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof Collapsible>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { Collapsible },
    setup() {
      return { args };
    },
    template: '<Collapsible v-bind="args" />',
  }),
  args: {},
};
