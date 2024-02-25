import { useEffect, useState } from 'react'
import './App.css'
import './_reset.css'
import Layout from './layout/layout'
import { IBurger } from './types/burger.interface'

const BASE_URL = 'https://norma.nomoreparties.space/api'

function App() {
	const [state, setState] = useState({
		isLoading: false,
		hasError: false,
		apiData: []
	})

	const getIngredients = () => {
		setState({ ...state, hasError: false, isLoading: true })
		fetch(`${BASE_URL}/ingredients`)
			.then(res => res.json())
			.then(data => {
				const apiData = data.data
				setState({ ...state, apiData, isLoading: false })
			})
			.catch(e => {
				setState({ ...state, hasError: true, isLoading: false })
			})
	}

	useEffect(() => {
		getIngredients()
	}, [])

	const { apiData, isLoading, hasError } = state

	const data = apiData as IBurger[]

	return (
		<div className='App'>
			{isLoading && 'Загрузка...'}
			{hasError && 'Произошла ошибка'}
			{!isLoading && !hasError && <Layout burgers={data} />}
		</div>
	)
}

export default App
