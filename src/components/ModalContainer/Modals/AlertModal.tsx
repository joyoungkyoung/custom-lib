import { ModalPropsType } from "@/stores/modalStore";
import "./style.scss";

export default function AlertModal({ onSubmit, title, message }: ModalPropsType) {
  return (
    <div className="modal-wrapper">
      <div className="modal-body">
        <div className="modal-title">{title || "title"}</div>
        <div className="modal-content">{message}</div>
        <div className="btn-wrapper">
          <button onClick={onSubmit}>확인</button>
        </div>
      </div>
    </div>
  );
}
