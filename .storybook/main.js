const path = require('path');

module.exports = {
  "stories": [
    "../components/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    "storybook-tailwind-dark-mode",
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
        ...config.resolve.alias,
        "@/components": path.resolve(__dirname, "../components"),
      }
    return config;
  }
}