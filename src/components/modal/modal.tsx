import {
	MouseEventHandler,
	useCallback,
	useEffect,
	useRef,
	useState
} from 'react'
import { ModalOverlay, createContainer } from '../modal-overlay/modal-overlay'

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './modal.module.scss'

const MODAL_CONTAINER_ID = 'react-modals'

type Props = {
	title: string
	onClose?: () => void
	children: React.ReactNode | React.ReactNode[]
}

export const Modal = (props: Props) => {
	const { title, onClose, children } = props

	const rootRef = useRef<HTMLDivElement>(null)
	const [isMounted, setMounted] = useState(false)

	useEffect(() => {
		createContainer({ id: MODAL_CONTAINER_ID })
		setMounted(true)
	}, [])

	useEffect(() => {
		const handleWrapperClick = (event: MouseEvent) => {
			const { target } = event

			if (target instanceof Node && rootRef.current === target) {
				onClose?.()
			}
		}
		const handleEscapePress = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose?.()
			}
		}

		window.addEventListener('click', handleWrapperClick)
		window.addEventListener('keydown', handleEscapePress)

		return () => {
			window.removeEventListener('click', handleWrapperClick)
			window.removeEventListener('keydown', handleEscapePress)
		}
	}, [onClose])

	const handleClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement> =
		useCallback(() => {
			onClose?.()
		}, [onClose])

	return isMounted ? (
		<ModalOverlay id={MODAL_CONTAINER_ID}>
			<div className={styles.wrap} ref={rootRef}>
				<div className={styles.container}>
					<div
						className={`${styles.caption} text text_type_main-large mt-10 pl-10 pr-10`}
					>
						<p className={styles.title}>{title}</p>
						<button type='button' onClick={handleClose}>
							<CloseIcon type='primary' />
						</button>
					</div>
					<div className={styles.childrenContainer}>{children}</div>
				</div>
			</div>
		</ModalOverlay>
	) : null
}
