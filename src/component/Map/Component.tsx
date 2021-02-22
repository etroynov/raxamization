import { FC, useState, useLayoutEffect, useEffect } from 'react';

import styles from './index.module.css';

declare var ymaps: any;

type Props = {
  routes: any;
}

export const Map: FC<Props> = ({ routes }) => {
  const [mapInstance, setMapInstance] = useState<any>();

  const points = routes.map(([,,,, address]: any)=> address);

  useLayoutEffect(() => {
    ymaps.ready(function () {
      const YMap = new ymaps.Map('map', {
        center: [55.80, 49.16],
        zoom: 12,
        controls: [],
      });

      setMapInstance(YMap);
    });
  }, []);

  useEffect(() => {
    if (routes && mapInstance) {
       const route = new ymaps.multiRouter.MultiRoute(
        {
          referencePoints: points,
          params: {
            avoidTrafficJams: false,
          },
        },
        {
          activeRouteAutoSelection: true,
          boundsAutoApply: true,
        }
      );

      mapInstance.geoObjects.removeAll();
      mapInstance.geoObjects.add(route);
    }
  }, [routes]);

  return (
    <div
      className={styles.container}
      id="map"
    />
  );
};
