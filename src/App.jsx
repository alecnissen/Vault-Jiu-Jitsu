import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";
import AboutUsComponent from "./AboutUsComponent";
import { useState, useEffect } from "react";
import Schedule from "./Schedule";
import Instructors from "./Instructors";
import ProgramsComponent from "./ProgramsComponent";
import ContactFAQ from "./ContactFAQ";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/AboutUsComponent"
          element={<AboutUsComponent></AboutUsComponent>}
        ></Route>
        <Route path="/Schedule" element={<Schedule></Schedule>}></Route>
        <Route
          path="/Instructors"
          element={<Instructors></Instructors>}
        ></Route>
        <Route
          path="/ProgramsComponent"
          element={<ProgramsComponent></ProgramsComponent>}
        ></Route>
        <Route
          path="/nogi-section"
          element={<ProgramsComponent></ProgramsComponent>}
        ></Route>
        <Route path="/ContactFAQ" element={<ContactFAQ></ContactFAQ>}></Route>
      </Routes>
    </>
  );
}
