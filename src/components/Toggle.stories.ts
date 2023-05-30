// YourComponent.stories.ts

import type { Meta, StoryObj } from "@storybook/vue3";

import Toggle from "./Toggle.vue";

const meta: Meta<typeof Toggle> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Toggle",
  component: Toggle,
  tags: ["autodocs"],
};

//👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof Toggle>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { Toggle },
    setup() {
      return { args };
    },
    template: '<Toggle v-bind="args" />',
  }),
  args: {},
};
