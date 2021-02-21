import { FC } from 'react';

import styles from './index.module.css';

export type CardProps = {
  id: number;
  firstname: string;
  lastname: string;
  date: string;
};

export const Card: FC<CardProps> = ({ id, firstname, lastname, date }) => (
  <section className={styles.container}>
    <header>Менеджер #{id}</header>
    <main className={styles.user}>
      <figure className={styles.avatarContainer}>
        <img
          src="https://static.tildacdn.com/tild3739-6430-4136-b536-343732316235/man_2_2x.png"
          alt=""
          className={styles.avatar}
        />
      </figure>
      <div className={styles.title}>
        {firstname} {lastname}
      </div>
    </main>
    <div className={styles.meta}>
      <div className={styles.data}>
        <p>Понедельник,</p>
        <p>22 февраля 2021</p>
      </div>
      <div className={styles.status}>На маршруте</div>
    </div>
    <footer className={styles.footer}>
      <div className={styles.text}>Выполнено</div>
      <div className={styles.value}>74%</div>
    </footer>
  </section>
);
