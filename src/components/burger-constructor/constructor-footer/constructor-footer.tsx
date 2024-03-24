import {
	Button,
	CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useModal } from '../../../hooks/useModal'
import { Modal } from '../../modal/modal'
import OrderDetails from '../../order-details/order-details'
import styles from './constructor-footer.module.scss'

export default function ConstructorFooter() {
	const { isModalOpen, openModal, closeModal } = useModal()

	return (
		<>
			<div className={styles.container}>
				<p className='mr-2 text text_type_digits-medium'>610</p>
				<CurrencyIcon type='primary' />
			</div>
			<Button htmlType='button' type='primary' size='large' onClick={openModal}>
				<div className='text text_type_main-default'>
					<p>Оформить заказ</p>
				</div>
			</Button>

			{isModalOpen && (
				<Modal title='' onClose={closeModal}>
					<OrderDetails />
				</Modal>
			)}
		</>
	)
}
