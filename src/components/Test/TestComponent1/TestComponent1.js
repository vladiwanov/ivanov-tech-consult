import React from 'react';
import TestComponent2 from '../TestComponent2';
import s from './TestComponent1.module.scss';

export default function TestComponent1() {
  return (
    <section className={s.testComponent1}>
      <div>
        <div className={s.container}>
          <div className={s.paralax}>
            <div className={s.bg}></div>
            <div className={s.textItem}>
              <h4>TestComponent</h4>
            </div>
            <h4 className={s.textItem}>sejdckuvlihbkjn/l.khvjg</h4>
          </div>
        </div>

        <div>
          <TestComponent2 />
        </div>
      </div>
    </section>
  );
}
