import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import { IBurger } from '../../../../../types/burger.interface'
import { Modal } from '../../../../modal/modal'
import IngredientsDetail from '../../../ingredients-detail/ingredients-detail'
import styles from './ingredients-item.module.scss'
export default function IngredientsItem(ingredient: IBurger) {
	const [modalActive, setModalActive] = useState(false)

	const handleModalOpen = () => {
		setModalActive(true)
	}
	const handleModalClose = () => {
		setModalActive(false)
	}

	return (
		<>
			<div className={styles.container} onClick={handleModalOpen}>
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
			{modalActive && (
				<Modal title='Детали ингредиента' onClose={handleModalClose}>
					<IngredientsDetail {...ingredient} />
				</Modal>
			)}
		</>
	)
}
