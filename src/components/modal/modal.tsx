import { useState } from 'react'

export default function Modal() {
	const modalRoot = document.getElementById('react-modals')

	const [showModal, setShowModal] = useState(false)
	return (
		<>
			<button onClick={() => setShowModal(true)}>
				Show modal using a portal
			</button>
			{/* {showModal && createPortal(<div></div>, modalRoot)} */}
		</>
	)
}
