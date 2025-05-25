import { HeaderContacts } from "src/features/header-contacts";
import cls from "./header.module.scss";
import { Navbar } from "src/features/navbar";
import useViewportWidth from "src/hooks/useViewportWidth";
import { TABLET_VIEWPORT } from "src/shared/lib/constans";
import { classNames } from "src/shared/lib/class-names";
import { useLocation } from "react-router-dom";
import { AppRoutes } from "src/app/routes/routes";

const Header = (): React.ReactNode => {
  const screenWidth = useViewportWidth();
  const isMainPage = useLocation().pathname === AppRoutes.Main;
  return (
    <header className={classNames(cls.header, [], { [cls.header__main_page]: isMainPage })}>
      <HeaderContacts />
      {screenWidth >= TABLET_VIEWPORT && <Navbar />}
    </header>
  );
};

export default Header;
