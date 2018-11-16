const { injectBabelPlugin } = require("react-app-rewired");

module.exports = function override(config, env) {
  if (env === "development") {
    config = injectBabelPlugin(
      ["styled-components", { displayName: true }],
      config
    );
  }
  return config;
};
