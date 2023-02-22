import { useState } from "react";
import "./App.css";
import { Modal } from "./lib";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShowModal(true)}>show modal</button>
      <Modal
        title="modal title"
        show={showModal}
        onClose={() => setShowModal(false)}
      >
        Test npm package with modal
      </Modal>
    </div>
  );
}

export default App;
