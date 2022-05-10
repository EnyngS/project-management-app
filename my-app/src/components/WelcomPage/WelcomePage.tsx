import React from 'react';
import style from './WelcomePage.module.scss';

const WelcomePage = () => {
  return (
    <div className={style.welcome}>
      <div className={style.welcome__title}>
        <div>
          <h1>
            Welcome in <b>Rs PMApp</b>
          </h1>
          <span>
            <b>Project Management App</b> помогает командам эффективно решать рабочие задачи.
            Работайте в команде, управляйте проектами и выводите продуктивность на новый уровень
            собственным уникальным способом вместе с <b>Rs PMApp</b>.
          </span>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
