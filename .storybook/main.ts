const path = require("path");

import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      /**
       * storybook에서 scss 사용하려면 아래와 같이 코드 넣고,
       * preview.ts 파일에서 import로 땡겨와서 사용하면 됨
       */
      options: {
        sass: {
          implementation: require("sass"),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // storybook에서 alias 설정하려면 아래와 같이 설정해야함
  webpackFinal: async (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "../src/");

    return config;
  },
};
export default config;
