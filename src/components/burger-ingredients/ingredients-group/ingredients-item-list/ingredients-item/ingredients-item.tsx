import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { IBurger } from '../../../../../types/burger.interface'
import styles from './ingredients-item.module.scss'
export default function IngredientsItem(ingredient: IBurger) {
	return (
		<div className={styles.container}>
			{/* <Counter count={1} size='default' extraClass='m-1' /> */}
			<div className='mr-4 ml-4'>
				<img src={ingredient.image} />
			</div>

			<div className={`${styles.price} mt-1 mb-1`}>
				<div className='mr-1 text text_type_digits-default'>
					{ingredient.price}
				</div>
				<div>
					<CurrencyIcon type='primary' />
				</div>
			</div>
			<div className={`${styles.name} text text_type_main-small`}>
				{ingredient.name}
			</div>
		</div>
	)
}
