import cls from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div className="container">
        <div className={cls.footer__wrapper}>
          <div className={cls.footer__copyright}>
            <span>copyright © 2024-2025 ООО "Гидросервис"</span>
          </div>
          <div className={cls.footer__links}>
            <span>Поддержка и разработка сайтов RGS-VOLGA</span>
            <a href="https://t.me/gidravlika_m">
              <img
                src="img/svg/icons-telegram.svg"
                width={30}
                height={30}
                alt="Иконка телеграмм"
              />
            </a>
            <a href="https://wa.me/+79608726622" target="_blank">
              <img
                src="img/svg/icons-whatsapp.svg"
                width={30}
                height={30}
                alt="Иконка точка на карте"
              />
            </a>
          </div>
          {/* <a className={cls.footer__btn} href="#"/> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
