import React from 'react';
// import { useSelector } from 'react-redux';
import { useAppSelector } from '../../store/store';
import style from './Footer.module.scss';
import git from '../../common/img/git.png';
import { develpersType } from '../../store/reduser';

const Footer = () => {
  const developers = useAppSelector((store) => store.main.developers);
  return (
    <footer>
      <div className={style.devBox}>
        <a href="https://rs.school/react/">
          <img src="https://rs.school/images/rs_school_js.svg" alt="rs_school_js" />
        </a>
        {developers.map((el: develpersType) => {
          return (
            <div className={style.dev} key={el.id}>
              <span className={el.mentor ? style.active : ''}>
                {el.name} {el.mentor ? 'Mentor' : null}
              </span>
              <a href={el.url.git}>
                <img src={git} alt="developer" />
              </a>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
