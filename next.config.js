const withPlugins = require('next-compose-plugins');
const webpack = require('webpack');

const withSass = require("@zeit/next-sass");
const withImages = require('next-images');
const { parsed: localEnv } = require('dotenv').config()

const nextConfig = {
  webpack: (config, options) => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config
  },
};

module.exports = withPlugins([
  withSass, withImages
], nextConfig);