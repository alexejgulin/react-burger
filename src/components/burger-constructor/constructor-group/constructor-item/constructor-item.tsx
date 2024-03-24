import {
	CurrencyIcon,
	DeleteIcon,
	DragIcon,
	LockIcon
} from '@ya.praktikum/react-developer-burger-ui-components'
import { IIngredient } from '../../../../types/ingredient.interface'
import styles from './constructor-item.module.scss'

export default function ConstructorItem(props: IIngredient) {
	return (
		<div className='pb-2 pt-2'>
			<div className={styles.card}>
				{!props.isLocked ? (
					<DragIcon type='primary' />
				) : (
					<div className='ml-6'></div>
				)}
				<div
					className={`${styles.constructorElement} ${props.type === 'top' ? styles.pos_top : props.type === 'bottom' && styles.pos_bottom}`}
				>
					<span className={styles.row}>
						<img
							className={styles.image}
							src={props.thumbnail}
							alt={props.text}
						/>
						<span className={styles.text}>{props.text}</span>
						<span className={styles.rowProp}>
							<span className={styles.price}>{props.price}</span>
							<span className={styles.priceSvg}>
								<CurrencyIcon type='primary' />
							</span>
							<span className={styles.action}>
								{props.isLocked === true ? (
									<LockIcon type='secondary' />
								) : (
									<DeleteIcon type='primary' />
								)}
							</span>
						</span>
					</span>
				</div>
			</div>
		</div>
	)
}
