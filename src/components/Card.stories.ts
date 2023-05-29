// YourComponent.stories.ts

import type { Meta, StoryObj } from "@storybook/vue3";

import Card from "./Card.vue";

const meta: Meta<typeof Card> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Card",
  component: Card,
  tags: ["autodocs"],
};

//👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof Card>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
    title: "Example title",
    subHeader: "Secondary text",
  },
};

export const Secondary: Story = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args" />',
  }),
  args: {
    // Define props and data for the "Secondary" variant
    title: "Example title",
    subHeader: "Example with supporting text",
    mediaHref: "placeholder.svg",
    supportingText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    buttonText: "go",
    // ...
  },
};
