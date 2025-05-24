import { PartnerCard } from 'src/entities/partner-card';
import cls from './partners.module.scss';

const Partners = () => {
  return (
    <section className={cls.partners}>
      <div className="container">
        <div className={cls.partners__wrapper}>
          <div className={cls.partners__list} id="fist-list">
            <PartnerCard
              img="img/content/card_imz.jpg"
              img2x="img/content/card_imz@2x.jpg"
              webp="img/content/card_imz.webp"
              webp2x="img/content/card_imz@2x.webp"
              alt="Ивановский механический завод"
            />
            <PartnerCard
              img="img/content/card_gakz.jpg"
              img2x="img/content/card_gakz@2x.jpg"
              webp="img/content/card_gakz.webp"
              webp2x="img/content/card_gakz@2x.webp"
              alt="Ивановский механический завод"
            />
            <PartnerCard
              img="img/content/card_chetra.jpg"
              img2x="img/content/card_chetra@2x.jpg"
              webp="img/content/card_chetra.webp"
              webp2x="img/content/card_chetra@2x.webp"
              alt="Ивановский механический завод"
            />
          </div>
          <h2 className={cls.partners__title}>Наши партнеры</h2>
          <div className={cls.partners__list} id="second-list">
            <PartnerCard
              img="img/content/card_vipo.jpg"
              img2x="img/content/card_vipo@2x.jpg"
              webp="img/content/card_vipo.webp"
              webp2x="img/content/card_vipo@2x.webp"
              alt="Ивановский механический завод"
            />
            <PartnerCard
              img="img/content/card_palfinger.jpg"
              img2x="img/content/card_palfinger@2x.jpg"
              webp="img/content/card_palfinger.webp"
              webp2x="img/content/card_palfinger@2x.webp"
              alt="Ивановский механический завод"
            />
            <PartnerCard
              img="img/content/card_kaz.jpg"
              img2x="img/content/card_kaz@2x.jpg"
              webp="img/content/card_kaz.webp"
              webp2x="img/content/card_kaz@2x.webp"
              alt="Ивановский механический завод"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
