import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

const App = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <Modal modal={modal} setModal={setModal}></Modal>
      <ButtonModal setModal={setModal}></ButtonModal>
    </div>
  );
};

export default App;
