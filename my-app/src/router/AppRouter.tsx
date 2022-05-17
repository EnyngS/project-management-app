import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes,privateRoutes } from './routs'

const AppRouter = () => {
	const isAuth : boolean = useSelector((state: any)=> state.auth.user.isAuth)

	return(<>
		<Routes>
			{
				(isAuth)
				? (privateRoutes.map(el => <Route key ={el.id} path = {el.path} element ={el.element} />))
				: (publicRoutes.map(el => <Route key={el.id} path = {el.path} element={el.element}/>))
			},
		</Routes>
	</>
	)
}

export default AppRouter