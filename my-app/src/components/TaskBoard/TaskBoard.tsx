import axios from 'axios'
import React,{FC, useEffect} from 'react'
import { useSelector } from 'react-redux'
import style from './TaskBoard.module.scss'

const TaskBoard:FC = (props) => {
	const hash = useSelector((state:any) => state.auth.user.token)
	const boardID = useSelector((state:any) => state.task.boardID)
	const columns = useSelector((state:any) => state.task.columns)
	console.log(hash)
	
// check aLL
	// useEffect(()=>{
	// 	axios.get(`https://quiet-bastion-49623.herokuapp.com/boards/${boardID}/columns`,{
	// 		headers: {
	// 			Authorization: `Bearer ${hash}`,
	// 		 },
	// 	})
	// 	.then(res =>console.log(res.data))
	// },[])
	// add cell
	// useEffect(()=>{
	// 	axios({
	// 				method: 'POST',
	// 				headers: { Authorization: `Bearer ${hash}`},
	// 				data:{
	// 				"title": "task1asdf asdfa fdsad fasdfs",
	// 				"order": 2},
	// 				url: `https://quiet-bastion-49623.herokuapp.com/boards/${boardID}/columns`
	// 	}).then(res =>console.log(res.data))
	// },[])

	
	console.log(boardID)
	return(<div className={style.taskWrapp}>
		
		<div className={style.tabelBoard}>
			<div className={style.cellWrapp}><h4>Задания</h4>
				<div className={style.element}>el</div>
			</div>
			<div className={style.cellWrapp}><h4>В работе</h4>
			task</div>
			<div className={style.cellWrapp}><h4>Завершено</h4>
			task</div>
		</div>
	</div>)
}

export default TaskBoard