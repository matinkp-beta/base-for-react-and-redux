import React from "react";
import { Route } from "react-router-dom";

import Test from "./components/upload";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Test} />
    
  </div>
);

export default BaseRouter;
