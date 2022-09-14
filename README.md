# A modal ReactJS boilerplate component and customizable for theme and colors!

## Context

Modal component for React, keep theme default colors or choose ones as you like

## Intall Steps

You can install this component with npm or yarn:

```
npm i react_customizable_modal_boilerplate_clippens
```

## In your React project

Import modal component into the file

```
import { Modal } from "react_customizable_modal_boilerplate_clippens"
```

## NpmJS package link:

```
https://www.npmjs.com/package/react_customizable_modal_boilerplate_clippens
```

## Example for using in a react project:

**ReactApp.js**

```js
import "./ModaleStyling.css";
import { Modal } from "react_customizable_modal_boilerplate_clippens";
import { useState } from "react";

function App() {
	// Open and close modale
	const [openModale, setOpenModale] = useState(false);
	const onOpenModale = () => setOpenModale(true);
	const onCloseModale = () => setOpenModale(false);
	const Submit = (event) => {
		event.preventDefault();
		onOpenModale();
	};
	return (
		<div className="ReactApp">
			<form onSubmit={Submit}>
				<button type="submit" className="submit">
					Click here to open Modale
				</button>
			</form>

			{openModale && <Modal close={onCloseModale} text="Write your text here" />}
		</div>
	);
}

export default App;
```

## Props list

| Name  | Type    | Required | Description                                   | Default |
| ----- | ------- | -------- | --------------------------------------------- | ------- |
| text  | string  | Yes      | The text to be displayed in the modal         |         |
| close | boolean | Yes      | The close button to be displayed in the modal |         |

**ModaleStyling.css Customize colors, dimensions and all for background modal, close button background modal and modal**

```css
/* global modal parameters */

.modal {
	width: 80%;
	max-width: 500px;
	padding: 15px 30px;
	border-radius: 0.5rem;
	background: #d5db99; /*  modal background color */
	box-shadow: 0 0 10px #000;
	text-align: left;
	vertical-align: middle;
	box-sizing: border-box;
	display: inline-block;
	z-index: 2;
	position: relative;
}

/* modal close modal icon parameters */
.modal .close-modal {
	background-image: url(test); /*  close modal icon in base64 to load faster */
	display: block;
	position: absolute;
	top: -16.5px;
	right: -16.5px;
	width: 50px;
	height: 50px;
	border: none;
	background-color: transparent; /*  close button background color */
	background-position: center center;
	background-repeat: no-repeat;
	background-size: contain;
	text-indent: -9999px;
	cursor: pointer;
}

/* bacground behind modal parameters */

.modal-background {
	background-color: rgba(5, 6, 7, 8.76); /*  modal background color outside */
	right: 0;
	bottom: 0;
	left: 0;
	width: 150vw;
	height: 150vh;
	padding: 30px;
	overflow: auto;
	text-align: center;
	font-weight: bold;
	box-sizing: border-box;
	z-index: 1;
	position: fixed;
	top: 0;
}

/*  before background behind modal parameters */

.modal-background::before {
	display: inline-block;
	margin-right: 0.05em;
	vertical-align: middle;
	content: "";
	height: 100%;
}
```
