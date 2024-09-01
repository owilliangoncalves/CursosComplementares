const ButtonModal = ({ setModal }) => {
  return (
    <>
      <button onClick={() => setModal(true)}>Abrir</button>
      <button onClick={() => setModal(false)}>Fechar</button>
    </>
  );
};
export default ButtonModal;
