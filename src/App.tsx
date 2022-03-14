/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React from "react";

import Project from "./components/Project";

const App = () => (
  <React.Fragment>
    <Project />
    <a
      className="block mx-auto mt-6 mb-4 text-sm font-bold w-fit"
      href="https://github.com/devmotheg">
      Coded by Mohamed Muntasir
    </a>
  </React.Fragment>
);

export default App;
