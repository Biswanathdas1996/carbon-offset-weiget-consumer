import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SamplePage1 from "./Pages/SamplePage1";
import SamplePage2 from "./Pages/SamplePage2";
import SamplePage3 from "./Pages/SamplePage3";
import SamplePage4 from "./Pages/SamplePage4";

class Routing extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sample-1" element={<SamplePage1 />} />
        <Route exact path="/sample-2" element={<SamplePage2 />} />
        <Route exact path="/sample-3" element={<SamplePage3 />} />
        <Route exact path="/sample-4" element={<SamplePage4 />} />
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
