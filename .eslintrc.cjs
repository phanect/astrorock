"use strict";

const { join } = require("node:path");

module.exports = {
  root: true,
  extends: "phanective/node",

  parserOptions: {
    project: join(__dirname, "tsconfig.json"),
  },
};
