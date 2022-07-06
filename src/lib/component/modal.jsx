import React from "react";
import "./Styling/modal.css";

function Modal(element) {
	return (
		<div className="Theme">
			<div className="Background">
				<div className="Message">
					<p>{element.text}</p>
					<button className="Button" onClick={element.close}>
						X
					</button>
				</div>
			</div>
		</div>
	);
}
export default Modal;
