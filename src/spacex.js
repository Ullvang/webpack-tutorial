import Heading from "./components/heading/heading.js";
import SpaceX from "./components/spacex-image/spacex-image.js";
import React from "react";

const heading = new Heading();
heading.render("spacex");

const spacex = new SpaceX();
spacex.render();
