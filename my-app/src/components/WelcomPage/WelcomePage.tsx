import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { GlobalContext } from '../../context/context';
import style from './WelcomePage.module.scss';

const WelcomePage = () => {
	const en = useSelector((state: any)=> state.settings.lang)
	const lang: any = useContext(GlobalContext)
	const promo1 = lang[en].welcomePage.promo1[0]
  return (
    <div className={style.welcomePage}>
      <div className={style.promo1}>
        <div>
				<h1>
					<b>{promo1.split(' ')[0][0]}</b>{promo1.split(' ')[0].slice(1)}&ensp;
					<b>{promo1.split(' ')[1][0]}</b>{promo1.split(' ')[1].slice(1)}&ensp;
					<b>{promo1.split(' ')[2][0]}</b>{promo1.split(' ')[2].slice(1)}<br />
					{lang[en].welcomePage.promo1[1]}
				</h1>
          <span>
            {lang[en].welcomePage.promo1[2].split(' ').slice(0,-2).join(' ')}&ensp;
				<b>{(lang[en].welcomePage.promo1[2].split(' ').slice(-2)).join(' ')}</b>
          </span>
        </div>
      </div>
		<div className={style.promo2}>
			<div>
				<h2>{lang[en].welcomePage.promo2[0]}</h2>
				<p>{lang[en].welcomePage.promo2[1]}</p>
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
		<div className={style.promo4}>
			<div>
				<h2>Lorem ipsum dolor sit</h2>
				<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Iusto placeat voluptas quasi soluta quis, nisi incidunt
						 magni quos obcaecati ad pariatur voluptatibus autem alias illo dolorem dicta ipsa et fuga.
				</p>
			</div>
      </div>
		<div className={style.promo5}>
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
