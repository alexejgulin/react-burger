import { IBurgerType } from '../../../types/burger-type.interface'
import { BurgerArray, IBurger } from '../../../types/burger.interface'
import { burgerTypes } from '../../../utils/burger-type'
import styles from './ingredients-group.module.scss'
import IngredientsItemList from './ingredients-item-list/ingredients-item-list'

export default function IngredientsGroup({
	burgers
}: {
	burgers: BurgerArray
}) {
	return (
		<div className={styles.container}>
			{burgerTypes.map((burgerType: IBurgerType) => (
				<div key={burgerType.code}>
					<div
						className={`${styles.groupCaption} mt-10 mb-6 text text_type_main-medium`}
					>
						<p>{burgerType.caption}</p>
					</div>
					<IngredientsItemList
						burgers={burgers.filter(
							(burger: IBurger) => burger.type === burgerType.code
						)}
					/>
				</div>
			))}
		</div>
	)
}
