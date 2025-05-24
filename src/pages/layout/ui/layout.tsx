import { Outlet } from "react-router-dom";
import { Header } from "src/widgets/header";

const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </>
    );
  };
export default Layout;