import {
	Button,
	CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './constructor-footer.module.scss'

export default function ConstructorFooter() {
	return (
		<>
			<div className={styles.container}>
				<p className='mr-2 text text_type_digits-medium'>610</p>
				<CurrencyIcon type='primary' />
			</div>
			<Button htmlType='button' type='primary' size='large'>
				<div className='text text_type_main-default'>
					<p>Оформить заказ</p>
				</div>
			</Button>
		</>
	)
}
