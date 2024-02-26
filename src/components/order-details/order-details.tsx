import logo from '../../images/7fc90c4fa8d58fc7f2d482c801de99e4.png'
import styles from './order-details.module.scss'

export default function OrderDetails() {
	return (
		<div className={styles.container}>
			<div className={`${styles.name}`}>
				<p className='text text_type_digits-large ml-25 mr-25 pl-12 pr-12 mt-10'>
					034536
				</p>
			</div>
			<div className={`${styles.name} mt-8 `}>
				<p className='text text_type_main-medium '>идентификатор заказа</p>
			</div>
			<div className={`${styles.img} mt-15`}>
				<img src={logo} height={120} width={120} />
			</div>
			<div className={`${styles.name}  mt-15`}>
				<p className='text text_type_main-default '>
					Ваш заказ начали готовить
				</p>
			</div>
			<div className={`${styles.secondText}  mt-2 mb-30 `}>
				<p className='text text_type_main-default'>
					Дождитесь готовности на орбитальной станции
				</p>
			</div>
		</div>
	)
}
