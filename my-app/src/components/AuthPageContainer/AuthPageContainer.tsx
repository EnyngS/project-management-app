import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin } from '../../store/authReduser';
import AuthPage from './AuthPage/AuthPage';
const axios = require('axios').default;

const AuthPageContainer:FC = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	interface IUser {
		isAuth: boolean;
		id: string;
		username: string;
		login: string,
		email: string,
		password: string,
		token: string,
	 }
	let user: IUser;
	let setUser: any;

	[user, setUser] = useState({
		isAuth: false,
		id:'',
		username: '',
		login: '',
		email: '',
		password: '',
		token: ''
	});

	useEffect( () => {

		if(user.isAuth){

			axios.post('https://quiet-bastion-49623.herokuapp.com/signup',{
				"name": user.username,
				"login": user.login,
				"password": user.password,
			})
			.then(function (response: any) {
				setUser( user.id = response.data.id)
				axios.post('https://quiet-bastion-49623.herokuapp.com/signin',{
					"login": user.login,
					"password": user.password,
			})
			.then((res:any)=>{
				let result ={
					...user,
					token: res.data.token 
				}
				return(
					dispatch(signin(result)),
					setUser({
						isAuth: false,
						id: '',
						username: '',
						login: '',
						email: '',
						password: '',
						token: ''
					}),
					navigate('/main')
				)
			})
			.catch((error: any) => {
				return(console.log(error))
			})
			})
			.catch(function (error: any) {
				return(console.log(error))
			});
		}
	}, [user] )

  return (<AuthPage addUser = {setUser}/>);
};

export default AuthPageContainer;