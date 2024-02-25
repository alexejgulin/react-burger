import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { IIngredient } from '../../../../types/ingredient.interface'
import styles from './constructor-item.module.scss'

export default function ConstructorItem(props: IIngredient) {
	return (
		<div className={`${styles.container} pb-2 pt-2`}>
			<ConstructorElement {...props} />
		</div>
	)
}
