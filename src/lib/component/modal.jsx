import React from "react";
import "./Styling/modal.css";

function Modal(element) {
	return (
		<div className="modal-background">
			<div className="modal">
				<p>{element.text}</p>
				<button className="close-modal" onClick={element.close}>
					X
				</button>
			</div>
		</div>
	);
}
export default Modal;
