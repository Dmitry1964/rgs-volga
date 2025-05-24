import { useRef, useEffect } from 'react';
import cls from './map-gis.module.scss';
import DG from '2gis-maps';

const MapGis = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const center = [48.822733, 44.609915];
    const myIcon = DG.icon({
      iconUrl: 'img/svg/map-point.svg',
      iconSize: [38, 95],
      iconAnchor: [19,80],
      popupAnchor: [-3, -76],
    })

    const marker = DG.marker(center, {icon: myIcon});
    const map = DG.map(mapRef.current, {
      center,
      zoom: 16,
      fullscreenControl: false,
    });

    marker.addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} className={cls.map_gis}></div>;
};

export default MapGis;
