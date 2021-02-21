import { FC, useState } from 'react';
import { Search as SearchIcon } from 'react-ionicons';
import Calendar from 'rc-calendar';

import { Map } from './component/Map';
import { Card, CardProps } from './component/Card';

import styles from './App.module.css';

const users: CardProps[] = [{
  id: 1,
  firstname: 'Варвара',
  lastname: 'Гольц',
  date: new Date().toString(),
}];

export const App: FC = () => {
  const [date, setDate] = useState<any>(new Date());

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

          <section>
            {users.map(user => <Card {...user} />)}
          </section>
        </aside>
        <main>
          <Map />
        </main>
        <aside className={styles.sidebarRight}>
          <header>
            <h2 className={styles.sidebarRightTitle}>Маршрут</h2>
            <hr className={styles.devider} />
          </header>
        </aside>
      </section>
    </div>
  );
};
