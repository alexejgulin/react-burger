import {
	ConstructorElement,
	DragIcon
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
				<ConstructorElement {...props} />
			</div>
		</div>
	)
}
