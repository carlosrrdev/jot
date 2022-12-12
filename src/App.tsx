import type { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";

// Import routes
import { Home } from "./pages/Home";

export const App: Component = () => {
  return (
    <Routes>
      <Route path={"/"} component={Home} />
    </Routes>
  );
};
