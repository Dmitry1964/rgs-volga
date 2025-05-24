import { ContactsData } from 'src/shared/lib/constans';
import cls from './contacts.module.scss';
import { MapGis } from 'src/features/map-gis';
import { MapLinks } from 'src/entities/map-links';

const ContactsSection = () => {
  return (
    <section className={cls.contacts}>
      <div className="container">
        <div className={cls.contacts__wrapper}>
          <div className={cls.contacts__content}>
            <h3>мы находимся</h3>
            <h2>контакты</h2>
            <ul className={cls.contacts__list}>
              <li className={cls.contacts__item}>
                <img
                  src="img/svg/icon-phone.svg"
                  width={30}
                  height={30}
                  alt="Иконка телефона"
                />
                <div className={cls.contacts__item_links}>
                  <a href={`tel:${ContactsData.RepairPhone}`}>
                    <span>
                      Ремонт спецтехники и служба сервиса
                      <br />
                      {ContactsData.ServicePhoneStr}
                    </span>
                  </a>
                  <a href={`tel:${ContactsData.RepairPhone}`}>
                    <span>
                      Ремонт гидрооборудования
                      <br />
                      {ContactsData.RepairPhoneStr}
                    </span>
                  </a>
                </div>
              </li>
              <li className={cls.contacts__item}>
                <img
                  src="img/svg/icon-mail.svg"
                  width={30}
                  height={30}
                  alt="Иконка телефона"
                />
                <div className={cls.contacts__item_links}>
                  <a href={`mailto:${ContactsData.Email}`}>
                    <span>{ContactsData.Email}</span>
                  </a>
                </div>
              </li>
              <li className={cls.contacts__item}>
                <img
                  src="img/svg/icon-point.svg"
                  width={30}
                  height={30}
                  alt="Иконка точка на карте"
                />
                <div className={cls.contacts__item_links}>
                  <span>г.Волгоград, ул.им.Лавренёва,19Д</span>
                </div>
              </li>
            </ul>
            <ul className={cls.contacts__social_list}>
              <li className={cls.contacts__social_item}>
                <div className={cls.contacts__item_links}>
                  <a href={`https://t.me/${ContactsData.Telegram}`} target="_blank">
                    <img
                      src="img/svg/icons-telegram.svg"
                      width={35}
                      height={35}
                      alt="Иконка телеграмм"
                    />
                  </a>
                </div>
              </li>
              <li className={cls.contacts__social__item}>
                <div className={cls.contacts__item_links}>
                  <a href={`https://wa.me/${ContactsData.RepairPhone}`} target="_blank">
                    <img
                      src="img/svg/icons-whatsapp.svg"
                      width={35}
                      height={35}
                      alt="Иконка whatsapp"
                    />
                  </a>
                  derv
                </div>
              </li>
            </ul>
          </div>
          <div className={cls.contacts__map}>
            <MapGis />
            <MapLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
