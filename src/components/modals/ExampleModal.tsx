const ExampleModal = ({ title, message, onClose }: { title: string; message: string; onClose: () => void }) => {
  return (
    <div className="modal-box">
      <h2>{title}</h2>
      <p>{message}</p>
      <button onClick={onClose}>Закрити</button>
    </div>
  );
};

export default ExampleModal;
