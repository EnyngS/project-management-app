import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/context';
import { actionLeng } from '../../store/settingsReduser';
import style from './Header.module.scss';


const Header = () => {
	const [ scroll ,setScroll] = useState('')
	const dispatch = useDispatch()
	const en:any = useSelector((state:any) => state.settings.lang)
	const lang:any = useContext(GlobalContext)

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
	const hendlerChenge = (e : any) => {
		let lang = e.target.value
		dispatch(actionLeng(lang))
	}

  return (
	<header className={scroll}>
		<div className={style.content}>

			<select onChange = {(e)=>{ hendlerChenge(e) }}>
				<option value="ru">ru</option>
				<option value="en">en</option>
			</select>

			<div className={style.boxBtn}>
				<Link className={style.welBtn} to={'/login'}>
					{lang[en].header.btn[0]}
				</Link>
				<Link className={style.welBtn} to={'/signup'}>
					{lang[en].header.btn[1]}
				</Link>
				{/* <Link className={style.welBtn} to={'/AuthPage'}>Go to Main Page</Link> */}
			</div>

		</div>
	</header>
  );
};

export default Header;
