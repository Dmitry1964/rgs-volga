import { Link } from 'react-router-dom';
import cls from './temp-block.module.scss';
import { AppRoutes } from 'src/app/routes/routes';

type TempBlockProps = {
  imgUrl: string;
}


const TempBlock = ({ imgUrl }: TempBlockProps): React.ReactNode => {
  return (
    <section className={cls.temp_block}>
      <div className={cls.temp_block__wrapper}>
        <div className={cls.temp_block__img}>
          <img src={imgUrl} alt="temp block" />
        </div>
        <div className={cls.temp_block__content}>
          <div className='container'>
            <h2 className={cls.temp_block__title}>Страница находится в разработке</h2>
            <p className={cls.temp_block__text}>Мы работаем над этой страницей и скоро она будет доступна для вас.</p>
            <Link to={AppRoutes.Main}>
              <span className={cls.temp_block__link}>На главную</span>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TempBlock;