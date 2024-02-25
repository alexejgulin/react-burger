import { BurgerArray, IBurger } from '../../../types/burger.interface'
import styles from './constructor-group.module.scss'
import ConstructorItem from './constructor-item/constructor-item'

export default function ConstructorGroup({
	burgers
}: {
	burgers: BurgerArray
}) {
	return (
		<div className={styles.container}>
			<div className='pr-5 pb-2'>
				<ConstructorItem
					type='top'
					isLocked={true}
					text='Краторная булка N-200i (верх)'
					price={200}
					thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
				/>
			</div>
			<div className={`${styles.subContainer} pr-1`}>
				{burgers &&
					burgers.map((ingredient: IBurger) => (
						<ConstructorItem
							key={ingredient._id}
							text={ingredient.name}
							price={ingredient.price}
							thumbnail={ingredient.image}
						/>
					))}
			</div>
			<div className='pr-5 pt-2'>
				<ConstructorItem
					type='bottom'
					isLocked={true}
					text='Краторная булка N-200i (низ)'
					price={200}
					thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
				/>
			</div>
		</div>
	)
}
