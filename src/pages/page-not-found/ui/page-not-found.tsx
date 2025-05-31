import { Link } from 'react-router-dom';
import cls from './page-not-found.module.scss';
import { AppRoutes } from 'src/app/routes/routes';

const PageNotFound = (): React.ReactNode => {
  return (
    <main className="main-page">
      <section className={cls.page_notfound}>
          <div className={cls.page_notfound__wrapper}>
            <span className={cls.page_notfound__desc}>404</span>
            <h2 className={cls.page_notfound__title}>Страница не найдена</h2>
            <Link to={AppRoutes.Main}>
            <span className={cls.page_notfound__link}>На главную</span></Link>
          </div>
      </section>
    </main>
  )
}

export default PageNotFound;