import React from 'react';
import css from './statistics.module.css';

import rndColors from '../../utils/rndColors';

const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2>{title}</h2>}

    <ul className={css.statlist}>
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className={css.item}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics;
