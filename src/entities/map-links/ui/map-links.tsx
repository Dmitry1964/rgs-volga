import cls from './map-links.module.scss';

const MapLinks = () => {
  return (
    <ul className={cls.map_links__list}>
      <li className={cls.map_links__item}>
        <a
          className={cls.map_links__widget}
          href="http://2gis.ru/volgograd/firm/70000001084381707/center/44.609606,48.82276/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap"
          target="_blank"
        >
          Посмотреть на карте Волгограда
        </a>
      </li>
      <li className={cls.map_links__item}>
        <a
          className={cls.map_links__widget}
          href="http://2gis.ru/volgograd/center/44.609606,48.82276/zoom/16/routeTab/rsType/bus/to/44.609606,48.82276╎Гидравлика-М?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route"
          target="_blank"
        >
          Найти проезд до Гидравлика-М
        </a>
      </li>
    </ul>
  );
};

export default MapLinks;
