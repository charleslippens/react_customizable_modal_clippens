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

```js
import "./ModaleStyling.css";
import { Modal } from "react_customizable_modal_boilerplate_clippens" 
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

      {openModale && (
        <Modal
          close={onCloseModale}
          text="Write your text here"
        />
      )}
    </div>
  );
}

export default App;
```
