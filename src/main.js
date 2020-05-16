import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills.js";

import "./scripts/parallax.js";

import "./scripts/hooper.js";

import "./scripts/works.js";

import "./scripts/hamburger.js";

import "./scripts/form.js";