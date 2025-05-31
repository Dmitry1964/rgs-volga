import { NavLink } from "react-router-dom";
import cls from "./navbar.module.scss";
import { AppRoutes } from "src/app/routes/routes";

const Navbar = () => {
  return (
    <nav className={cls.navbar}>
      <div className="container">
        <ul className={cls.navbar__list}>
          <li className={cls.navbar__item}>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                [cls.navbar__link, isActive ? cls.active : ""].join(" ")
              }
            >
              Главная
            </NavLink>
          </li>
          <li className={cls.navbar__item}>
            <NavLink
              to={AppRoutes.Repair}
              className={({ isActive }) =>
                [cls.navbar__link, isActive ? cls.active : ""].join(" ")
              }
            >
              Ремонт оборудования
            </NavLink>
          </li>
          <li className={cls.navbar__item}>
            <NavLink
              to={AppRoutes.Sevice}
              className={({ isActive }) =>
                [cls.navbar__link, isActive ? cls.active : ""].join(" ")
              }
            >
              Ремонт спецтехники
            </NavLink>
          </li>
          <li className={cls.navbar__item}>
            <NavLink
              to={AppRoutes.Sevice}
              className={({ isActive }) =>
                [cls.navbar__link, isActive ? cls.active : ""].join(" ")
              }
            >
              Производство РВД
            </NavLink>
          </li>
          <li className={cls.navbar__item}>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                [cls.navbar__link, isActive ? cls.active : ""].join(" ")
              }
            >
              Диагностика
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
