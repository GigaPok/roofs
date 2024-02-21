import { React } from "react";
import { Header, Footer } from "./components";
import "./MainLayout.scss";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
};
