import s from './Example.module.scss';

export default function Example() {
  return (
    <div>
      <div className={s.parallax}>
        <div className={s.parallaxImage}>
          <img
            src="https://i.pinimg.com/originals/9e/20/fc/9e20fc9ba2e1456ff29caa6780521cb7.jpg"
            alt="Сад изящных слов"
          />
        </div>
        <p className={s.parallaxText}>Сад изящных слов</p>
      </div>
    </div>
  );
}
