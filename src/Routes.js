import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SamplePage1 from "./Pages/SamplePage1";

class Routing extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sample-1" element={<SamplePage1 />} />
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Routes>
    );
  }
}

export default Routing;
