import { ContactsData } from 'src/shared/lib/constans';
import cls from './contacts-block.module.scss';


const ContactsBlock = (): React.ReactNode => {
  return (
    <div className={cls.contact_block}>
      <div className="container">
        <div className={cls.contact_block__wrapper}>
          <a className={cls.contact_block__link} href={`tel:${ContactsData.RepairPhone}`}>
            <img
              src="img/svg/icon-phone-rev.svg"
              width={40}
              height={40}
              alt="Иконка телефона"
            />
            <span>
              Ремонт гидравлического оборудования
              <br />
              {ContactsData.RepairPhoneStr}
            </span>
          </a>
          <a className={cls.contact_block__link} href={`tel:${ContactsData.ServicePhone}`}>
            <img
              src="img/svg/icon-phone-rev.svg"
              width={40}
              height={40}
              alt="Иконка телефона"
            />
            <span>
            Ремонт спецтехники и служба сервиса
              <br />
              {ContactsData.ServicePhoneStr}
            </span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default ContactsBlock;
