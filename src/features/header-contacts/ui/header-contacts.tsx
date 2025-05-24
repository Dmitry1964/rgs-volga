import {
  ContactsData,
  TABLET_VIEWPORT,
  DESKTOP_VIEWPORT,
} from "src/shared/lib/constans";
import cls from "./header-contacts.module.scss";
import useViewportWidth from "src/hooks/useViewportWidth";
import { MobileMenu } from "src/features/mobile-menu";

const HeaderContacts = () => {
  const widthScreen = useViewportWidth();

  console.log(widthScreen);
  return (
    <div className={cls.header_contacts}>
      <div className={cls.header_contacts__logo}>
        <img src="img/svg/logo-desktop.svg" alt="Логотип предприятия" />
        <div className={cls.header_contacts__title}>
          <img src="img/svg/logo-name.svg" alt="Логотип предприятия" />
          <span>Ремонт и сервис гидравлических систем</span>
        </div>
      </div>
      {widthScreen >= DESKTOP_VIEWPORT && (
        <ul className={cls.header_contacts__list}>
          <li className={cls.header_contacts__item}>
            <a
              className={cls.header_contacts__link}
              href={`tel:${ContactsData.OfficePhone}`}
            >
              <svg
                width="40.000000"
                height="40.000000"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <desc></desc>
                <defs>
                  <clipPath id="clip18_52">
                    <rect
                      id="icon-phone"
                      width="40.000000"
                      height="40.000000"
                      fill="white"
                      fillOpacity="0"
                    />
                  </clipPath>
                </defs>
                <g clipPath="url(#clip18_52)">
                  <ellipse
                    id="circle"
                    cx="20.000000"
                    cy="20.000000"
                    rx="20.000002"
                    ry="20.000000"
                    fill="#0788AA"
                    fillOpacity="1.000000"
                  />
                  <path
                    id="path"
                    d="M19.97 18.73C19.97 18.89 20.1 19 20.25 19C20.56 19 20.81 19.26 20.81 19.56C20.81 19.71 20.93 19.83 21.08 19.83C21.23 19.83 21.36 19.71 21.36 19.56C21.36 18.96 20.86 18.46 20.25 18.46C20.1 18.46 19.97 18.59 19.97 18.73ZM24.42 19.83C24.57 19.83 24.69 19.71 24.69 19.56C24.69 17.14 22.7 15.16 20.25 15.16C20.1 15.16 19.97 15.29 19.97 15.43C19.97 15.58 20.1 15.7 20.25 15.7C22.4 15.7 24.15 17.44 24.15 19.56C24.15 19.71 24.27 19.83 24.42 19.83Z"
                    fill="#15184D"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                  <path
                    id="path"
                    d="M22.48 19.56C22.48 19.71 22.6 19.83 22.75 19.83C22.9 19.83 23.02 19.71 23.02 19.56C23.02 18.05 21.78 16.81 20.25 16.81C20.1 16.81 19.97 16.94 19.97 17.08C19.97 17.24 20.1 17.35 20.25 17.35C21.48 17.35 22.48 18.35 22.48 19.56ZM20.25 13.52C20.1 13.52 19.97 13.64 19.97 13.79C19.97 13.93 20.1 14.06 20.25 14.06C23.32 14.06 25.82 16.53 25.82 19.56C25.82 19.71 25.94 19.83 26.09 19.83C26.24 19.83 26.37 19.71 26.37 19.56C26.37 16.23 23.62 13.52 20.25 13.52ZM22.92 22.41L22.56 22.6C21.95 22.92 21.48 23.82 20.74 23.15L18.8 21.2L17.12 19.56C16.27 18.49 17.22 18.24 17.55 17.64L17.74 17.29C17.96 16.89 18.04 16.44 17.97 15.99C17.91 15.55 17.7 15.14 17.38 14.81C16.98 14.42 16.45 14.2 15.88 14.2C15.32 14.2 14.79 14.42 14.39 14.81L14.25 14.95C13.51 15.68 13.43 16.94 14.01 18.49C14.56 19.98 15.66 21.59 17.12 23.02C19.33 25.21 21.8 26.48 23.57 26.48C24.26 26.48 24.86 26.28 25.28 25.86L25.42 25.72C25.82 25.33 26.04 24.81 26.04 24.24C26.04 23.69 25.81 23.15 25.42 22.77C24.76 22.11 23.73 21.97 22.92 22.41Z"
                    fill="#15184D"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                </g>
              </svg>
              <span>{ContactsData.OfficePhoneStr}</span>
            </a>
          </li>
          <li className={cls.header_contacts__item}>
            <a
              className={cls.header_contacts__link}
              href="mailto:gidravlika-m@mail.ru"
            >
              <svg
                width="50.000000"
                height="50.000000"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <desc></desc>
                <defs>
                  <clipPath id="clip107_9">
                    <rect
                      id="icon-mail"
                      width="50.000000"
                      height="50.000000"
                      fill="white"
                      fillOpacity="0"
                    />
                  </clipPath>
                </defs>
                <g clipPath="url(#clip107_9)">
                  <circle
                    id="circle"
                    cx="25.000000"
                    cy="25.000000"
                    r="25.000000"
                    fill="#0788AA"
                    fillOpacity="1.000000"
                  />
                  <path
                    id="path"
                    d="M14.68 18.78L23.59 24.37C23.89 24.55 24.28 24.64 24.67 24.64C25.06 24.64 25.45 24.55 25.75 24.37L34.66 18.78C35.25 18.41 35.8 17 34.73 17L14.61 17C13.55 17 14.1 18.41 14.68 18.78ZM34.93 21.83L25.75 27.42C25.34 27.67 25.06 27.7 24.67 27.7C24.28 27.7 24 27.67 23.59 27.42C23.19 27.17 15.11 22.23 14.45 21.83C13.99 21.55 14 21.88 14 22.14L14 32.25C14 32.84 14.67 33.64 15.18 33.64L34.21 33.64C34.72 33.64 35.4 32.84 35.4 32.25L35.4 22.14C35.4 21.88 35.4 21.55 34.93 21.83Z"
                    fill="#15184E"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                </g>
              </svg>

              <span>gidravlika-m@mail.ru</span>
            </a>
          </li>
          <li className={cls.header_contacts__item}>
            <a className={cls.header_contacts__link} href="#">
              <svg
                width="40.000000"
                height="40.000000"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <clipPath id="clip148_1">
                    <rect
                      id="point"
                      width="40.000000"
                      height="40.000004"
                      fill="white"
                      fillOpacity="0"
                    />
                  </clipPath>
                </defs>
                <g clipPath="url(#clip148_1)">
                  <circle
                    id="circle"
                    cx="20.000000"
                    cy="20.000000"
                    r="20.000002"
                    fill="#0788AA"
                    fillOpacity="1.000000"
                  />
                  <path
                    id="path"
                    d="M20 10.66C16.13 10.66 13 13.8 13 17.66C13 22.16 16.38 24.12 17.12 25.02C18.92 27.17 19.02 29.33 20 29.33C20.97 29.33 21.07 27.17 22.87 25.02C23.61 24.12 27 22.16 27 17.66C27 13.8 23.86 10.66 20 10.66ZM20 22.33C17.42 22.33 15.33 20.24 15.33 17.66C15.33 15.08 17.42 13 20 13C22.57 13 24.66 15.08 24.66 17.66C24.66 20.24 22.57 22.33 20 22.33ZM20 15.33C18.71 15.33 17.66 16.37 17.66 17.66C17.66 18.95 18.71 20 20 20C21.28 20 22.33 18.95 22.33 17.66C22.33 16.37 21.28 15.33 20 15.33Z"
                    fill="#15184E"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                  <circle
                    id="ellipse"
                    cx="20.000000"
                    cy="17.666656"
                    r="0.777778"
                    fill="#15184E"
                    fillOpacity="1.000000"
                  />
                </g>
              </svg>
              <span>{ContactsData.Address}</span>
            </a>
          </li>
        </ul>
      )}
      {widthScreen < TABLET_VIEWPORT && <MobileMenu />}
    </div>
  );
};

export default HeaderContacts;
