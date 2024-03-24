import styles from './ingredients-header.module.scss'

export default function IngredientsHeader() {
	return (
		<div className={`${styles.header} pt-10 pb-5 text text_type_main-large`}>
			<p>Соберите бургер</p>
		</div>
	)
}
