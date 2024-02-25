import { BurgerArray } from '../../types/burger.interface'
import styles from './burger-constructor.module.scss'
import ConstructorFooter from './constructor-footer/constructor-footer'
import ConstructorGroup from './constructor-group/constructor-group'
import ConstructorHeader from './constructor-header/constructor-header'

export default function BurgerConstructor({
	burgers
}: {
	burgers: BurgerArray
}) {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<ConstructorHeader />
				<ConstructorGroup burgers={burgers}/>
			</div>
			<div className={styles.bottom}>
				<ConstructorFooter />
			</div>
		</div>
	)
}
