import { Link } from 'react-router-dom';
import cls from './unit-card.module.scss';
import { MouseEvent, useCallback } from 'react';
import { UnitModal } from 'src/entities/unit-modal';

type UnitCardProps = {
  img: string;
  img2x: string;
  webp: string;
  webp2x: string;
  title: string;
  list: string[];
  listImg?: string[];
};

const UnitCard = (card: UnitCardProps): React.ReactNode => {
  const { img, img2x, webp, webp2x, title, list} = card;
  const handleCardButton = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = (e.target as HTMLElement).closest('article');
    const modal = target?.querySelector('#modal');
    if (modal) {
      modal.classList.add('isActive');
    }
  }, []);

  return (
    <article className={cls.unit_card}>
      <div className={cls.unit_card__wrapper}>
        <div className={cls.unit_card__img}>
          <picture>
            <source
              type="image/webp"
              srcSet= {`${webp}, ${webp2x}`}
            />
            <img
              src={img}
              srcSet={img2x}
              width={635}
              height={600}
              alt={title}
            />
          </picture>
        </div>
        <div className={cls.unit_card__content}>
          <h3 className={cls.unit_card__title}>{title}</h3>
          <Link onClick={handleCardButton} className={cls.unit_card__button} to={'#'}>Подробнее</Link>
        </div>
      </div>
      <UnitModal>
        <h3 className={cls.unit_card__modal_title}>{title}</h3>
        <ul className={cls.unit_card__modal_list}>
          {list.length > 0 && list.map((item, index) => (
            <li key={index} className={cls.unit_card__modal_item}>{item}</li>
          ))}
        </ul>
      </UnitModal>
    </article>
  );
};

export default UnitCard;
