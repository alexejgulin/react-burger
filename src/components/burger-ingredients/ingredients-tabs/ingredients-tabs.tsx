import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import { IBurgerType } from '../../../types/burger-type.interface'
import { burgerTypes } from '../../../utils/burger-type'
import styles from './ingredients-tabs.module.scss'

export default function IngredientsTabs() {
	const [current, setCurrent] = useState('one')

	return (
		<div className={styles.container}>
			{burgerTypes.map((burgerType: IBurgerType) => (
				<div key={burgerType.code} className='text text_type_main-default'>
					<Tab
						value={burgerType.code}
						active={current === burgerType.code}
						onClick={setCurrent}
					>
						<p>{burgerType.caption}</p>
					</Tab>
				</div>
			))}
		</div>
	)
}
