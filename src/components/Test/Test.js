import Example from './Example';
import s from './Test.module.scss';
import TestComponent1 from './TestComponent1';
import TestComponent2 from './TestComponent2';

export default function Test() {
  return (
    // <div className={s.test}>
    <div>
      <TestComponent1 />
      {/* <TestComponent2 /> */}
      {/* <Example /> */}
    </div>
  );
}
