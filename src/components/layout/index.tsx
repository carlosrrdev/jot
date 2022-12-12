import { Component, JSXElement } from "solid-js";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CssBaseline } from "@suid/material";

interface Props {
  children: JSXElement;
}

export const Layout: Component<Props> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
