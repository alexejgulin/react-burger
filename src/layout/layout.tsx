import AppHeader from '../components/app-header/app-header'
import BurgerConstructor from '../components/burger-constructor/burger-constructor'
import BurgerIngredients from '../components/burger-ingredients/burger-ingredients'
import { BurgerArray } from '../types/burger.interface'

import styles from './layout.module.scss'

export default function Layout({ burgers }: { burgers: BurgerArray }) {
	return (
		<>
			<header>
				<AppHeader />
			</header>
			<main className={styles.main}>
				<BurgerIngredients burgers={burgers} />
				<BurgerConstructor burgers={burgers} />
				{/* <div className={styles.qqq}>
					{burgers &&
						burgers.map((ingredient: IBurger) => (
							<ConstructorItem
								key={ingredient._id}
								text={ingredient.name}
								price={ingredient.price}
								thumbnail={ingredient.image}
							/>
						))}
				</div> */}
			</main>
		</>
	)
}
