import { BurgerArray, IBurger } from '../../../../types/burger.interface'
import styles from './ingredients-item-list.module.scss'
import IngredientsItem from './ingredients-item/ingredients-item'

export default function IngredientsItemList({
	burgers
}: {
	burgers: BurgerArray
}) {
	return (
		<div className={`${styles.container} ml-4`}>
			{burgers &&
				burgers.map((ingredient: IBurger) => (
					<IngredientsItem key={ingredient._id} {...ingredient} />
				))}
		</div>
	)
}
