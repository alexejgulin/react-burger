import {
	BurgerIcon,
	ListIcon,
	Logo,
	ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.scss'

export default function AppHeader() {
	return (
		<nav className={styles.container}>
			<div className={`${styles.menu} pb-4 pt-4`} style={{ color: 'white' }}>
				<ul>
					<ol className={'pr-2'}>
						<div className={`${styles.button} pl-5 pr-5`}>
							<BurgerIcon type='primary' />
							<p
								className={`${styles.active} pl-2 text text_type_main-default`}
							>
								Конструктор
							</p>
						</div>
					</ol>
					<ol>
						<div className={`${styles.button} pl-5 pr-5`}>
							<ListIcon type='secondary' />
							<p className='pl-2 text text_type_main-default'>Лента заказов</p>
						</div>
					</ol>
				</ul>
			</div>

			<div className={styles.logo}>
				<Logo />
			</div>

			<div className={`${styles.user} pb-4 pt-4`}>
				<div className={`${styles.button} pl-5 pr-5`}>
					<ProfileIcon type='secondary' />
					<p className='pl-2 text text_type_main-default'>Личный кабинет</p>
				</div>
			</div>
		</nav>
	)
}
