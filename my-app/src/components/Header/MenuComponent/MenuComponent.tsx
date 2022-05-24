import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../context/context'
import { exit } from '../../../store/authReduser'
import { GetAllBoards, setModal } from '../../../store/sliceBoards'
import style from './MenuComponent.module.scss'


const MenuComponent = () => {
	const dispatch = useDispatch()
	const en:any = useSelector((state:any) => state.settings.lang)
	const lang:any = useContext(GlobalContext)	
	const [display, setDisplay] = useState<string>('none')

	const open:any = (event:any)=> {
		event.stopPropagation()
		setDisplay('flex')
	}
	const close:any = (event:any)=> {
		event.stopPropagation()
		setDisplay('none')
	}
	function onClick() {
		setDisplay('none')
		dispatch(setModal(true));
		// dispatch(GetAllBoards());
	 }


	return(<div className={style.menuWrapp} onClick = { (event) => {open(event)} }>
		<div className={style.line} ></div>
		<div className={style.menu} style = {{display: display} } onClick = {(event)=> {close(event)}}>
			<div className={style.close} onClick = {(event)=> {close(event)}}></div>
			<ul className={style.menuListWrapp} onClick={(event)=>event.stopPropagation()}>
				<li><div  className={style.welBtn}  onClick={onClick}>New board</div></li>
				<li><Link className={style.welBtn} to={'/'}>test</Link></li>
				<li><Link className={style.welBtn} to={'/'}>test</Link></li>
				<li>
					<Link className={style.welBtn} to={'/'} onClick={()=> { dispatch(exit({})) }}>{lang[en].header.btn[3]}</Link>
				</li>
			</ul>
		</div>
	</div>)

}

export default MenuComponent