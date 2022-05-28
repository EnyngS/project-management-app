import axios from 'axios'
import React,{FC, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setCell, getAllTask } from '../../store/taskReduser'
import style from './TaskBoard.module.scss'

const TaskBoard:FC = (props) => {
	const dispatch = useDispatch()
	const userId = useSelector((state:any) => state.auth.user.id)
	const hash = useSelector((state:any) => state.auth.user.token)
	const boardID = useSelector((state:any) => state.task.boardID)
	const columns = useSelector((state:any) => state.task.columns)
	// const columnsID = '4e0ee804-b341-45c3-944f-896d3c455615'
	// console.log('userID: ', userId)
	// console.log('boardID: ', boardID)
	console.log('columns: ', columns)

	// createCell
	async function createCell(title:any, order:any){
		await axios({
				method: 'POST',
				headers: { Authorization: `Bearer ${hash}`},
				data:{
				"title": title,
				"order": order},
				url: `https://quiet-bastion-49623.herokuapp.com/boards/${boardID}/columns`
				}).then(res =>{
					dispatch( setCell(res.data) )
				})
	}

	async function getCell() {
		await axios.get(`https://quiet-bastion-49623.herokuapp.com/boards/${boardID}/columns`,{
			headers: {
				Authorization: `Bearer ${hash}`,
			 },
		})
		.then((res:any) =>{
			if(res.data.length === 0){
				return columns.forEach(async(el:any, id:any) => {
						await createCell(el.title, id+1)
						})
			} else {
				return res.data.forEach((el:any) => dispatch(setCell(el)))
			}
		})
	}

		// async function createTask() {
		// 	await axios({
		// 		method: 'POST',
		// 		headers: { Authorization: `Bearer ${hash}`},
		// 		data:{
		// 			"title": "name task2",
		// 			"done": false,
		// 			"order": 1,
		// 			"description": "Domestic test2",
		// 			"userId": userId
		// 		 },
		// 		url: `https://quiet-bastion-49623.herokuapp.com/boards/${boardID}/columns/${columns[0].id}/tasks`
		// 		}).then(res =>{
		// 		console.log(res.data)
		// 		})
		// }
		// useEffect(()=>{
		// 	createTask()
		// },[])

		async function getTask(columnID:any) {
				await axios.get(`https://quiet-bastion-49623.herokuapp.com/boards/${boardID}/columns/${columnID}/tasks`,{
					headers: {
						Authorization: `Bearer ${hash}`,
						},	
				}).then((res:any)=>{
					if(res.data.length > 0){
						dispatch(getAllTask([res.data,res.data[0].order-1]))
					}
				})
		}
		useEffect(()=>{
			// get or create Cell
			getCell()
			// get tasks
			columns.forEach((el:any)=>{
				getTask(el.id)
			})
		},[])

	return(<div className={style.taskWrapp}>
		
		<div className={style.tabelBoard}>
			<div className={style.cellWrapp}><h4>Задания</h4>
				<div className={style.element}>{columns[0].task[0].description}</div>
				<div className={style.element}>{columns[0].task[0].description}</div>
			</div>
			<div className={style.cellWrapp}><h4>В работе</h4>
			task</div>
			<div className={style.cellWrapp}><h4>Завершено</h4>
			task</div>
		</div>
	</div>)
}

export default TaskBoard