import axios from 'axios'
import React,{FC, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setCell, getAllTask, setDeleteTask, setCreateTask } from '../../store/taskReduser'
import ModalBoard from '../ModalBoard/ModalBoard'
import style from './TaskBoard.module.scss'

const TaskBoard:FC = (props) => {
	const dispatch = useDispatch()
	const userId = useSelector((state:any) => state.auth.user.id)
	const hash = useSelector((state:any) => state.auth.user.token)
	const boardID = useSelector((state:any) => state.task.boardID)
	const columns = useSelector((state:any) => state.task.columns)
	// console.log('boardID: ', boardID)
	// console.log('columns: ', columns)
	const [isModal, setIsModal] = useState(false)
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
					dispatch(setCell(res.data))
				})
	} 
	async function createTask( columnId:any , title:any,description:any) {
		await axios({
			method: 'POST',
			headers: { Authorization: `Bearer ${hash}`},
			data:{
				"title": title,
				"done": false,
				"order": 1,
				"description": description,
				"userId": userId
			 },
			url: `https://quiet-bastion-49623.herokuapp.com/boards/${boardID}/columns/${columnId}/tasks`
			}).then(res => {
				let [column] = columns.filter((el:any, i:any)=> el.id === res.data.columnId? el :'')
				let index = columns.indexOf(column)
				let task = res.data
				dispatch( setCreateTask( { index , task } ) )
				getTask(columnId)
			})
	}
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
	async function getAllCell() {
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
				return res.data.forEach((el:any) => {
					dispatch(setCell(el))
					getTask(el.id)
				}
				)
			}
		})
	}
	async function deleteTask(columnId:any, taskId:any){
		axios.delete(`https://quiet-bastion-49623.herokuapp.com/boards/${boardID}/columns/${columnId}/tasks/${taskId}`,{
			headers: { Authorization: `Bearer ${hash}`},
		}).then(()=>{
			let [column] = columns.filter((el:any, i:any)=> el.id === columnId? el :'')
			let index = columns.indexOf(column)
			dispatch( setDeleteTask( { index, taskId} ) )
			getTask(columnId)
		}).catch((rje)=>{
			console.log(rje)
		})
		
	}

	useEffect ( ()=>{
		getAllCell()
		.catch(console.error);
	},[])

	function dragElementStart(event:any ,task:any){
		event.preventDefault()
		console.log( task)
	}

	function dragElement(event:any, el:any){
		event.preventDefault()
		console.log('end')
	}


	function dragElementLeave(event:any ,task:any){
		event.preventDefault()
		// console.log("drag: ", task)
	}

	function dragColumnsOver(event:any, id:any){
		event.preventDefault()
		// event.target.style.boxShadow = '0 0 2px #eee'
		// return (console.log("over: ", columns.filter((el:any) => el.id === id ) ) )
	}
	function dragColumnsLeave(event:any){
		// event.target.style.boxShadow = 'none'
	}

	return(<div className={style.taskWrapp}>
		{isModal? (<ModalBoard modal={setIsModal} create={ createTask }/>): ''},
		<div className={style.tabelBoard}>
			<div className={style.cellWrapp}
			onDragOver={(event)=> dragColumnsOver(event, columns[0].id)}
			onDragLeave={(event)=> dragColumnsLeave(event)}
			><h4>Задания</h4>
			<button onClick={()=> { return(setIsModal(!isModal))} }>Создать Задания</button>
			{columns[0].task.length > 0? 
				columns[0].task.map((el:any)=>{
					return(
						<div 
						key={el.id} 
						className={style.element} 
						draggable={true}
						// onDragStart={(event)=>{ dragElementStart(event, el)}}
						onDragLeave={(event)=>{ dragElementLeave(event, el)}}
						// onDragEnd = {(event)=>{dragHendlerEnd(event)}}
						onDrag={(event)=>{dragElement(event, el)}}
						>
							<div>{el.description}</div>
							<div className={style.btnDelete} onClick={(e)=>{ deleteTask(el.columnId, el.id)}}></div>
						</div>
					)
				})
				: ''
			}
			</div>
			<div className={style.cellWrapp}
			onDragOver={(event)=> dragColumnsOver(event, columns[1].id)}
			onDragLeave={(event)=> dragColumnsLeave(event)}
			><h4>В работе</h4>
			{columns[1].task.length > 0? 
				columns[1].task.map((el:any)=>{
					return(
						<div key={el.id} className={style.element}>
							<div>{el.description}</div>
							<div className={style.btnDelete} onClick={(e)=>{ deleteTask(el.columnId,el.id)}}></div>
						</div>
					)
				})
				: ''
			}
			</div>
			<div className={style.cellWrapp}
			onDragOver={(event)=> dragColumnsOver(event, columns[2].id)}
			onDragLeave={(event)=> dragColumnsLeave(event)}
			><h4>Завершено</h4>
			{columns[2].task.length > 0? 
				columns[2].task.map((el:any)=>{
					return(
						<div key={el.id} className={style.element}>
							<div>{el.description}</div>
							<div className={style.btnDelete} onClick={(e)=>{ deleteTask(el.columnId,el.id)}}></div>
						</div>
					)
				})
				: ''
			}
			</div>
		</div>
	</div>)
}

export default TaskBoard;