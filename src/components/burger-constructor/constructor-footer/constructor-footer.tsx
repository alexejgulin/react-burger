import {
	Button,
	CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import { Modal } from '../../modal/modal'
import OrderDetails from '../../order-details/order-details'
import styles from './constructor-footer.module.scss'

export default function ConstructorFooter() {
	const [modalActive, setModalActive] = useState(false)

	const handleModalOpen = () => {
		setModalActive(true)
	}
	const handleModalClose = () => {
		setModalActive(false)
	}

	return (
		<>
			<div className={styles.container}>
				<p className='mr-2 text text_type_digits-medium'>610</p>
				<CurrencyIcon type='primary' />
			</div>
			<Button
				htmlType='button'
				type='primary'
				size='large'
				onClick={handleModalOpen}
			>
				<div className='text text_type_main-default'>
					<p>Оформить заказ</p>
				</div>
			</Button>

			{modalActive && (
				<Modal title='' onClose={handleModalClose}>
					<OrderDetails />
				</Modal>
			)}
		</>
	)
}
