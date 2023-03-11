import React, { useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {
    const [show, setShow] = useState(false)

    return (
      <div className="App">
        <button onClick={() => setShow(true)}>Show Modal</button>
        <Modal title="My modal" onClose={() => setShow(false)} show={show}>
            <p>This is modal body</p>
        </Modal>
      </div>
    );
  }
export default App;
