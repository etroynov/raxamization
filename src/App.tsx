import { FC } from 'react';

import { Map } from './components/Map';

import styles from './App.module.css';

export const App: FC = () => (
  <section className={styles.container}>
    <aside>
      <header>
        <h1>Карта</h1>
      </header>
    </aside>
    <main>
      <Map />
    </main>
    <aside></aside>
  </section>
);
