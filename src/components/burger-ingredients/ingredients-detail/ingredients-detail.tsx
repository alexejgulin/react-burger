import { IBurger } from '../../../types/burger.interface'
import styles from './ingredients-detail.module.scss'

export default function IngredientsDetail(ingredient: IBurger) {
	return (
		<div className={styles.container}>
			<div className='mt-6'>
				<img src={ingredient.image_large} />
			</div>

			<div className={`${styles.name} mt-4 mb-8 mr-10 ml-10`}>
				<p className='text text_type_main-medium '>{ingredient.name}</p>
			</div>

			<div className={`${styles.properties} mb-15`}>
				<div className={`${styles.property}`}>
					<p className='text text_type_main-small '>Калории, ккал</p>
					<p className='text text_type_digits-medium'>{ingredient.calories}</p>
				</div>
				<div className={`${styles.property}`}>
					<p className='text text_type_main-small '>Белки, г</p>
					<p className='text text_type_digits-medium'>{ingredient.proteins}</p>
				</div>
				<div className={`${styles.property}`}>
					<p className='text text_type_main-small '>Жиры, г</p>
					<p className='text text_type_digits-medium'>{ingredient.fat}</p>
				</div>
				<div className={`${styles.property}`}>
					<p className='text text_type_main-small '>Углеводы, г</p>
					<p className='text text_type_digits-medium'>
						{ingredient.carbohydrates}
					</p>
				</div>
			</div>
		</div>
	)
}
