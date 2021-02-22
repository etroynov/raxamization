import cn from 'classnames';
import { FC } from 'react';
import format from 'date-fns/format';
import ru from 'date-fns/locale/ru';

import styles from './index.module.css';

export type CardProps = {
  name: any;
  date: any;
  isActive: boolean;
  className?: string;
  onClick: (name: string) => void;
};

export const Card: FC<CardProps> = ({ name, date, isActive, className, onClick }) => {
  const [,id] = name.split('-');
  const dateStr = format(date, 'dd MMMM yyyy', { locale: ru });
  const day = format(date, 'EEEE', { locale: ru });

  return (
    <section className={cn(styles.container, className, {
      [styles.active]: isActive
    })} onClick={() => onClick(name)}>
      <header>#{id}</header>
      <main className={styles.user}>
        <figure className={styles.avatarContainer}>
          <img
            src="https://static.tildacdn.com/tild3739-6430-4136-b536-343732316235/man_2_2x.png"
            alt=""
            className={styles.avatar}
          />
        </figure>
        <div className={styles.title}>
          {name}
        </div>
      </main>
      <div className={styles.meta}>
        <div className={styles.data}>
          <p>{day},</p>
          <p>{dateStr}</p>
        </div>
        <div className={styles.status}>На маршруте</div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.text}>Выполнено</div>
        <div className={styles.value}>0%</div>
      </footer>
    </section>
  );
};
