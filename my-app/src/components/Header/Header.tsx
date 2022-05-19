import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// let styles = require("./Header.module.css");
// import './Header.module.css';
import style from './Header.module.scss';


const Header = () => {
	const [ scroll ,setScroll] = useState('')

	useEffect(()=>{
		document.addEventListener('scroll', scrollHendler)

		return ()=> {
			setScroll('')
			document.removeEventListener('scroll', scrollHendler)
		}
	},[])

	const scrollHendler = () => {
		(window.scrollY > 0)
		? (setScroll(`${style.scroll}`))
		: (setScroll(``))
	}

  return (
    <header className={scroll}>
		 <div className={style.content}>
			 <div className={style.boxBtn}>
				<Link className={style.welBtn} to={'/login'}>
					log in
				</Link>
				<Link className={style.welBtn} to={'/signup'}>
					sing up
				</Link>
				{/* <Link className={style.welBtn} to={'/AuthPage'}>Go to Main Page</Link> */}
			</div>
		 </div>
      
    </header>
  );
};

export default Header;
