/** @type { import('@storybook/vue3-vite').StorybookConfig } */

// const config = {
//   stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-interactions",
//   ],
//   framework: {
//     name: "@storybook/vue3-vite",
//     options: {},
//   },
//   docs: {
//     autodocs: "tag",
//   },
// };
// export default config;
const path = require("path");

module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {
      viteFinal: async (config, { configType }) => {
        // Add the Tailwind CSS configuration
        config.resolve.alias["@"] = path.resolve(__dirname, "../src");
        config.resolve.alias["~"] = path.resolve(__dirname, "../");
        config.resolve.alias["vue"] = "vue/dist/vue.esm-bundler.js";
        config.resolve.alias["@vue/compiler-core"] =
          "@vue/compiler-core/dist/compiler-core.cjs.js";
        config.resolve.alias["@vue/compiler-dom"] =
          "@vue/compiler-dom/dist/compiler-dom.cjs.js";

        config.plugins.push(require("tailwindcss")());

        // Add the PostCSS loader for Tailwind CSS
        const cssRule = config.module.rules.find((rule) =>
          rule.test.test(".css")
        );
        cssRule.use.push({
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [require("tailwindcss")],
            },
          },
        });

        return config;
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
};
