import React from 'react';
import s from './TestComponent2.module.scss';

export default function TestComponent1() {
  return (
    <div className={s.testComponent2}>
      <section>
        <section className={s.paralaxContainer}>
          <h3 className={s.text}>TestComponent2</h3>
        </section>
      </section>
    </div>
  );
}
