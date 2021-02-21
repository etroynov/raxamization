import { useLayoutEffect } from 'react';

import styles from './index.module.css';

declare var ymaps: any;

export const Map = () => {
  useLayoutEffect(() => {
    ymaps.ready(function () {
      const YMap = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 10,
        controls: [],
      });

      // const multiRoute = new ymaps.multiRouter.MultiRoute(
      //   {
      //     referencePoints: ['Москва, Парк Победы', 'Москва, Лосиный остров'],
      //     params: {
      //       avoidTrafficJams: false,
      //     },
      //   },
      //   {
      //     // Автоматически устанавливать границы карты так,
      //     // чтобы маршрут был виден целиком.
      //     boundsAutoApply: true,
      //   }
      // );

      // YMap.geoObjects.add(multiRoute);

      // // Подпишемся на событие построения мультимаршрута.
      // multiRoute.model.events.add('requestsuccess', function () {
      //   // Коллекция путевых точек маршрута.
      //   var wayPoints = multiRoute.getWayPoints();

      //   console.info(wayPoints);

      //   // Проход по коллекции путевых точек.
      //   // Для каждой точки зададим содержимое меток.
      //   wayPoints.each(function (point: any) {
      //     point.options.set({
      //       preset: 'islands#redStretchyIcon',
      //       iconContentLayout: ymaps.templateLayoutFactory.createClass(
      //         '{{ properties.request|raw }}'
      //       ),
      //     });
      //   });
      // });

      // // Добавление маршрута на карту.
      // YMap.geoObjects.add(multiRoute);
    });
  }, []);
  return (
    <div
      className={styles.container}
      id="map"
    />
  );
};
