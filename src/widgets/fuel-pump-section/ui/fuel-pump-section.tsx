import cls from './fuel-pump.module.scss';

const FuelPumpSection = () => {
  return (
    <section className={cls.fuel_pump}>
      <div className='container'>
        <div className={cls.fuel_pump__wrapper}>
          <div className={cls.fuel_pump__img}>
            <picture>
              <source
                type="image/webp"
                srcSet="img/content/fuel-items.webp, img/content/fuel-items@2x.webp 2x"
              />
              <img
                src="img/content/fuel-items.jpg"
                srcSet="img/content/fuel-items@2x.jpg 2x"
                width={900}
                height={450}
                alt="Изображение форсунки и топливный насос"
              />
            </picture>
          </div>
          <div className={cls.fuel_pump__content}>
            <h2 className={cls.fuel_pump__title}>Диагностика, ремонт форсунок и ТНВД</h2>
          </div>
        </div>

      </div>

    </section>
  )
}

export default FuelPumpSection;
