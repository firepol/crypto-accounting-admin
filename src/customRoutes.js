// in src/customRoutes.js
import * as React from "react";
import { Route } from 'react-router-dom';
import Stats from "./trades/stats";

export default [
  <Route exact path="/trades/stats" component={Stats} />
];
