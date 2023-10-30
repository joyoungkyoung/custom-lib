import { ModalPropsType } from "@/stores/modalStore";
import "./style.scss";

export default function ConfirmModal({ onSubmit, onClose, title, message }: ModalPropsType) {
  return (
    <div className="modal-wrapper">
      <div className="modal-body" style={{ width: "200px", height: "500px" }}>
        <div className="modal-title">{title || "title"}</div>
        <div className="modal-content">{message}</div>
        <div className="btn-wrapper">
          <button onClick={onSubmit}>확인</button>
          <button onClick={onClose}>취소</button>
        </div>
      </div>
    </div>
  );
}
