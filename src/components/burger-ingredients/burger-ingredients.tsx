import { BurgerArray } from '../../types/burger.interface'
import styles from './burger-ingredients.module.scss'
import IngredientsGroup from './ingredients-group/ingredients-group'
import IngredientsHeader from './ingredients-header/ingredients-header'
import IngredientsTabs from './ingredients-tabs/ingredients-tabs'

export default function BurgerIngredients({
	burgers
}: {
	burgers: BurgerArray
}) {
	return (
		<div className={styles.container}>
			<IngredientsHeader />
			<IngredientsTabs />
			<IngredientsGroup burgers={burgers} />
		</div>
	)
}
