import cls from './service-section.module.scss';
import { FC } from "react"

const ServiceSection: FC = () => {
  return (
    <section className={cls.service_section}>
      <h2 className={cls.service_section__title}>Ремонт и сервис автокранов</h2>
      <div>
        <picture>
          <img className={cls.service_section__image} src="img/content/krane-banner.jpg" alt="Баннер автокран" />
        </picture>
      </div>
    </section>
  )
}

export default ServiceSection;
