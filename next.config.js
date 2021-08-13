const withLess = require("next-with-less");
const theme = require("./theme.json")
module.exports = withLess({
  lessLoaderOptions: {
    lessOptions: {
      /* 主题配置*/
      modifyVars: theme["dark"],
    },
  }
});