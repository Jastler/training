const ConfirmModal = ({ onClose, onConfirm }: { onClose: () => void; onConfirm: () => void }) => {
  return (
    <div className="modal-box">
      <h2>Ви впевнені?</h2>
      <button onClick={onConfirm}>Так</button>
      <button onClick={onClose}>Скасувати</button>
    </div>
  );
};

export default ConfirmModal;
