import { Link } from 'react-router-dom';
import cls from './service-card.module.scss';

type ServiceCardProps = {
  img: string;
  img2x: string;
  webp: string;
  webp2x: string;
  title: string;
  desc: string;
  url: string;
};

const ServiceCard = (card: ServiceCardProps): React.ReactNode => {
  const { img, img2x, webp, webp2x, desc, title, url } = card;
  return (
    <article className={cls.service_card}>
      <div className={cls.service_card__wrapper}>
        <div className={cls.service_card__img}>
          <picture>
            <source
              type="image/webp"
              srcSet= {`${webp}, ${webp2x}`}
            />
            <img
              src={img}
              srcSet={img2x}
              width={630}
              height={600}
              alt={title}
            />
          </picture>
        </div>
        <div className={cls.service_card__content}>
          <h2 className={cls.service_card__title}>{title}</h2>
          <p className={cls.service_card__desc}>{desc}</p>
          <Link className={cls.service_card__button} to={url}>Подробнее</Link>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
