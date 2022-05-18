import React from 'react';
import { useSelector } from 'react-redux';
import style from './WelcomePage.module.scss';

const WelcomePage = () => {
	const state = useSelector((state: any)=> state.auth.user)
  return (
    <div className={style.welcomePage}>
      <div className={style.promo1}>
        <div>
			  <h1>
				  <b>P</b>roject <b>M</b>anagement <b>A</b>pp
				  помогает командам эффективно решать рабочие задачи.
				</h1>
          <span>
            Работайте в команде, управляйте проектами и выводите продуктивность на новый уровень
            собственным уникальным способом вместе с <b>Rs PMApp</b>.
          </span>
        </div>
      </div>
		<div className={style.promo2}>
			<div>
				<h2>Это не просто работа. Это координация действий в команде.</h2>
				<p>
						Начните с досок, колонок и карточек, а затем переходите к более 
						сложным функциям. Управляйте проектами, 
						упорядочивайте задачи и поддерживайте командный дух.
				</p>
			</div>
      </div>
		<div className={style.promo3}>
			<div>
				<h2>Lorem ipsum dolor sit</h2>
				<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Iusto placeat voluptas quasi soluta quis, nisi incidunt
						 magni quos obcaecati ad pariatur voluptatibus autem alias illo dolorem dicta ipsa et fuga.
				</p>
			</div>
      </div>
    </div>
  );
};

export default WelcomePage;
