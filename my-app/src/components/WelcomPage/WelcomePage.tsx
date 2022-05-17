import React from 'react';
import { useSelector } from 'react-redux';
import style from './WelcomePage.module.scss';

const WelcomePage = () => {
	const state = useSelector((state: any)=> state.auth.user)
	console.log(state)
  return (
    <div className={style.welcomePage}>
      <div className={style.title}>
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
