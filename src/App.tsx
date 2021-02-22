import cn from 'classnames';
import format from 'date-fns/format';
import { FC, useState } from 'react';
import { Search as SearchIcon } from 'react-ionicons';
import Calendar from 'react-calendar';
import { RocketOutline, StopwatchOutline } from 'react-ionicons';

import { Map } from './component/Map';
import { Card } from './component/Card';

import styles from './App.module.css';

import { data } from './data';

const markers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export const App: FC = () => {
  const [activeUserID, setActiveUserID] = useState<string>();
  const [date, setDate] = useState<any>(new Date());
  const dateStr = format(date, 'dd.MM.yyyy');
  const users = data
    .filter((user) => user[0] === dateStr);

  const usersNameList = users.map((user: any) => user[1])
    .reduce((acc: string[], curr) => {
      if (!acc.includes(curr)) {
        acc.push(curr);
      }

      return acc;
    }, []);

  const routes = data.filter((user) => user[0] === dateStr && user[1] === activeUserID);

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.left}>
          <div className={styles.logo} />
        </div>
        <div className={styles.center}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Поиск"
          />
          <SearchIcon color="#a6a9c4" />
        </div>
        <div className={styles.right}></div>
      </header>

      <section className={styles.container}>
        <aside className={styles.sidebarLeft}>
          <header>
            <Calendar
              className={styles.calendar}
              onChange={setDate}
              value={date}
            />
          </header>

          <section className={styles.sidebarLeftContent}>
            {usersNameList.map((name: string) => (
              <Card
                key={name}
                name={name}
                date={date}
                isActive={name === activeUserID}
                onClick={(name) => setActiveUserID(name)}
              />
            ))}
          </section>
        </aside>
        <main>
          <Map routes={routes} />
        </main>
        <aside className={styles.sidebarRight}>
          <header className={styles.sidebarRightHeader}>
            <h2 className={styles.sidebarRightTitle}>Маршрут</h2>
            <hr className={styles.divider} />
          </header>

          <main className={styles.sidebarRightContent}>
            {routes.map((route, i) => {
              const [,, order, store, address, arrival, duration] = route;
              const [, street, house] = address.split(',');

              return (
                <section key={i}>
                  <div className={styles.pointer}>{markers[order - 1]}</div>
                  <header>
                    <h3 className={styles.routeTitle}>{store}</h3>
                    <div>{street}, {house}</div>
                  </header>
                  <div className={styles.meta}>
                    <p className={styles.metaItem}><RocketOutline color="#8F79DC" /> {arrival}</p>
                    <p className={styles.metaItem}><StopwatchOutline color="#8F79DC" /> {duration}</p>
                  </div>
                </section>
              )
            })}

            {!routes.length && (
              <p>Выберите мерчендайзера</p>
            )}
          </main>
        </aside>
      </section>
    </div>
  );
};
