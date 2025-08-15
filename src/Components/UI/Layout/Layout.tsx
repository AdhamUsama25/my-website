import { Outlet } from "react-router";
import ThemeProvider from "../../../ThemeContext";
import Header from "../../Header/Header";
import MouseFollower from "../../MouseFollower/MouseFollower";
const Layout = () => {
  return (
    <ThemeProvider>
      <MouseFollower />
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};

export default Layout;
